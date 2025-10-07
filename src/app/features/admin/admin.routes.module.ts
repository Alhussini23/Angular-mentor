import {NgModule } from "@angular/core";
import { RouterModule , CanActivateFn , Router , Routes } from "@angular/router";
import { inject } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { AdminLayoutsComponent } from "./layouts/admin-layouts/admin-layouts.component";
import { AdminHomeComponent } from "./components/admin-home/admin-home.component";
import { CoursesListComponent } from "./components/courses/courses-list/courses-list.component";
import { CreateComponent } from "./components/courses/create/create.component";
import { UpdateComponent } from "./components/courses/update/update.component";
import { AdminAccountComponent } from "./components/admin-account/admin-account.component";
import { Error404Component } from "./components/error404/error404.component";
import { AdminLoginComponent } from "./components/admin-login/admin-login.component";

export const adminGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {

    router.navigate(['admin/login'])
    return false;
  }
};



const router: Routes = [

    {path: 'login' , component: AdminLoginComponent },
    {path:'' , component:AdminLayoutsComponent ,canActivate: [adminGuard] , children:[

            {path:'' , component: AdminHomeComponent},
            {path:'home' , component: AdminHomeComponent},
            {path: 'add a course' , component: CreateComponent},
            {path: 'available courses' , component: CoursesListComponent},
            {path: 'account' , component: AdminAccountComponent},
            {path: 'Update/:id', component: UpdateComponent},
            {path: '**' , component: Error404Component},
        ]
    }
];


@NgModule({
    imports:[RouterModule.forChild(router)],
    exports: [RouterModule]
})


export class adminModule{};
