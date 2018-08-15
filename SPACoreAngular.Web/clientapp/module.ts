import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular-highcharts';

//Components
import { AppComponent } from './component/app/component';
import { HomeComponent } from './component/home/component';
import { AboutComponent } from './component/about/component';
import { UserComponent } from './component/user/component';
import { ChartComponent } from './component/chart/component';

//Routes
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'user', component: UserComponent },
    { path: 'chart', component: ChartComponent }
];

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), ChartModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, UserComponent, ChartComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }