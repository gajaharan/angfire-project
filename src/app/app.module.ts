import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import {firebaseConfig, authConfig} from "../environments/firebase.config";
import { HomeComponent } from './home/home.component';
import {LessonsService} from "./shared/services/lessons.service";
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import {routerConfig} from "./router.config";
import {RouterModule} from "@angular/router";
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CoursesComponent } from './courses/courses.component';
import {CoursesService} from "./shared/services/courses.service";
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import { SafeUrlPipe } from './shared/security/safe-url.pipe';
import { NewLessonComponent } from './new-lesson/new-lesson.component';
import { LessonFormComponent } from './lesson-form/lesson-form.component';
import {LessonResolver} from "./shared/services/lesson.resolver";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthService} from "./shared/services/auth.service";
import {AuthGuard} from "./shared/security/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonsListComponent,
    TopMenuComponent,
    CoursesComponent,
    CourseDetailComponent,
    LessonDetailComponent,
    EditLessonComponent,
    SafeUrlPipe,
    NewLessonComponent,
    LessonFormComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [LessonsService, CoursesService, LessonResolver, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
