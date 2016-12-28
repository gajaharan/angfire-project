import {Component, OnInit} from '@angular/core';
import {LessonsService} from "../shared/services/lessons.service";
import {Lesson} from "../shared/services/lesson";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allLessons: Lesson[];
  filtered: Lesson[];

  constructor(private _lessonsService: LessonsService) {

  }

  ngOnInit() {
    this._lessonsService.findAllLessons()
      .subscribe(
        lessons => this.allLessons = this.filtered = lessons
      );
  }

  search(search: string) {
    this.filtered = this.allLessons.filter(lesson => lesson.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
