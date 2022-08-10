import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { RouterModule, Routes} from "@angular/router";
// import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { FilesizePipe } from './common/pipe/filesize/filesize.pipe';
import { UnlessDirective } from './common/directives/unless/unless.directive';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BgcolorDirective } from './common/directives/bgcolor/bgcolor.directive';

// const routes: Routes = [
//   { path: 'watch/first', component: AppComponent },
//   { path: 'feature'},
//   { path: "**", component: AppComponent },
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilesizePipe,
    UnlessDirective,
    ReactiveFormComponent,
    BgcolorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // MatButtonModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(routes),
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
