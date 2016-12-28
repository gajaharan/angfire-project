import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {Lesson} from "./lesson";

@Injectable()
export class LessonsService {

  constructor(private _angularFire: AngularFire) {

  }

  findAllLessons(): Observable<Lesson[]> {
    return this._angularFire.database.list('lessons')
      .do(console.log)
      .map(Lesson.fromJsonList);
  }

}
