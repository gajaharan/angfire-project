import {Component, OnInit} from '@angular/core';
import {Lesson} from "../shared/services/lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {LessonsService} from "../shared/services/lessons.service";

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson: Lesson;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private lessonsService: LessonsService) {

    console.log('lesson detail created');


  }


  ngOnInit() {

    this.route.params.switchMap(params => {
      const lessonUrl = params['id'];
      return this.lessonsService.findLessonByUrl(lessonUrl);
    })
      .subscribe(lesson => this.lesson = lesson);


  }

  next() {
    this.lessonsService.loadNextLesson(this.lesson.courseId, this.lesson.$key)
      .subscribe(this.navigateToLesson.bind(this));
  }

  previous() {
    this.lessonsService.loadPreviousLesson(this.lesson.courseId, this.lesson.$key)
      .subscribe(this.navigateToLesson.bind(this));
  }


  navigateToLesson(lesson: Lesson) {
    this.router.navigate(['lessons', lesson.url]);
  }




  requestLessonDeletion() {
    this.lessonsService.requestLessonDeletion(this.lesson.$key, this.lesson.courseId);
  }


}
