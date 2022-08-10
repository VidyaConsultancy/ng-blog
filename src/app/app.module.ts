import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { RouterModule, Routes} from "@angular/router";
// import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { FilesizePipe } from './common/pipe/filesize/filesize.pipe';

// const routes: Routes = [
//   { path: 'watch/first', component: AppComponent },
//   { path: 'feature'},
//   { path: "**", component: AppComponent },
// ]

@NgModule({
  declarations: [AppComponent, NavbarComponent, FilesizePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // MatButtonModule,
    MaterialModule,
    // RouterModule.forRoot(routes),
  ],
  exports: [],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
