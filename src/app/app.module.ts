import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// const routes: Routes = [
//   { path: 'watch/first', component: AppComponent },
//   { path: 'feature'},
//   { path: "**", component: AppComponent },
// ]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // RouterModule.forRoot(routes),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
