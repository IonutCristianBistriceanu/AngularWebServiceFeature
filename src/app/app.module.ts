import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { PostService } from './services/post.service';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SumarryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TitleCaseComponent } from './title-case/title-case.component';
import { customTitlePipe } from './customTitle.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostComponentComponent } from './post-component/post-component.component';
import {HttpModule} from '@angular/http';
import { GitHubFollowersComponent } from './git-hub-followers/git-hub-followers.component';
import { GitHubService } from './services/github.service';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SumarryPipe,
    customTitlePipe,
    FavouriteComponent,
    TitleCaseComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CoursesFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostComponentComponent,
    GitHubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GitHubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'followers/:id/:username',
        component:GitHubProfileComponent
      },
      {
        path:'followers',
        component:GitHubFollowersComponent
      },
      
      {
        path:'posts',
        component:PostComponentComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [CoursesService, AuthorsService,PostService,{provide:ErrorHandler, useClass:AppErrorHandler},GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
