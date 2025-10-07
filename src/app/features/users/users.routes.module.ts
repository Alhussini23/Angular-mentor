import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { CountsComponent } from "./components/counts/counts.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { EventsComponent } from "./components/events/events.component";
import { TrainersComponent } from "./components/trainers/trainers.component";
import { Error404Component } from "./shared/error404/error404.component";
import { UsersLayoutsComponent } from "./layouts/users-layouts/users-layouts.component";
import { PricingComponent } from "./components/pricing/pricing.component";


const route:Routes = [
    {path: '' , component:UsersLayoutsComponent , children: [

        {path: '' , component:HeroComponent},
        {path: 'home' , component:HeroComponent},
        {path: 'about' , component:AboutComponent},
        {path: 'contact' , component:CountsComponent},
        {path: 'courses' , component:CoursesComponent},
        {path: 'events' , component:EventsComponent},
        {path: 'trainers' , component:TrainersComponent},
        {path: 'pricing' , component:PricingComponent},

        {path:'**' , component:Error404Component}
    ]},
];



@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule],
})



export class usersModule{};
