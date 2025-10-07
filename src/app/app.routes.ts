import { Routes } from '@angular/router';
import { usersModule } from './features/users/users.routes.module';


export const routes: Routes = [
    {path:'users' ,loadChildren: ()=> import('./features/users/users.routes.module').then((m)=> m.usersModule) },
    {path: 'admin' , loadChildren: ()=> import('./features/admin/admin.routes.module').then((m)=> m.adminModule)},
    {path: '' , pathMatch: 'full', redirectTo: 'users'},

];
