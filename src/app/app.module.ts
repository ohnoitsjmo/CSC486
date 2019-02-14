import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { DetailsComponent } from './details/details.component';

const appRoutes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    DetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
