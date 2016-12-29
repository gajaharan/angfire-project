import {Injectable, Inject} from '@angular/core';
import {AngularFire, AngularFireDatabase, FirebaseRef} from "angularfire2";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {Lesson} from "./lesson";
import {firebaseConfig} from "../../../environments/firebase.config";
import {Http} from "@angular/http";

@Injectable()
export class LessonsService {

  sdkDb:any;

  constructor(private db:AngularFireDatabase, @Inject(FirebaseRef) fb,
              private http:Http) {

    this.sdkDb = fb.database().ref();

  }


  findAllLessons(): Observable<Lesson[]> {
    return this.db.list('lessons')
      .do(console.log)
      .map(Lesson.fromJsonList);
  }

  findLessonByUrl(url:string):Observable<Lesson> {
    return this.db.list('lessons', {
      query: {
        orderByChild: 'url',
        equalTo: url
      }
    })
      .filter(results => results && results.length > 0)
      .map(results => Lesson.fromJson(results[0]))
      .do(console.log);
  }


  loadNextLesson(courseId:string, lessonId:string):Observable<Lesson> {
    return this.db.list(`lessonsPerCourse/${courseId}`, {
      query: {
        orderByKey:true,
        startAt: lessonId,
        limitToFirst: 2
      }
    })
      .filter(results => results && results.length > 0)
      .map(results => results[1].$key)
      .switchMap(lessonId => this.db.object(`lessons/${lessonId}`))
      .map(Lesson.fromJson);
  }


  loadPreviousLesson(courseId:string, lessonId:string):Observable<Lesson> {
    return this.db.list(`lessonsPerCourse/${courseId}`, {
      query: {
        orderByKey:true,
        endAt: lessonId,
        limitToLast: 2
      }
    })
      .filter(results => results && results.length > 0)
      .map(results => results[0].$key)
      .switchMap(lessonId => this.db.object(`lessons/${lessonId}`))
      .map(Lesson.fromJson);

  }


  deleteLesson(lessonId:string): Observable<any> {

    const url = firebaseConfig.databaseURL + '/lessons/' + lessonId + '.json';

    return this.http.delete(url);
  }


  requestLessonDeletion(lessonId:string, courseId:string) {
    this.sdkDb.child('queue/tasks').push({lessonId,courseId})
      .then(
        () => alert('lesson deletion requested !')
      );
  }

}
