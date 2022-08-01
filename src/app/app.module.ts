import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
// import { RouterModule, Routes} from "@angular/router";
// import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './common/navbar/navbar.component';

// const routes: Routes = [
//   { path: 'watch/first', component: AppComponent },
//   { path: 'feature'},
//   { path: "**", component: AppComponent },
// ]

@NgModule({
  declarations: [AppComponent, NavbarComponent],
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
