import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { UserDetailsComponent, UserEditComponent, UserListComponent, ColumnsComponent } from '@avans-nx-workshop/features';
import { GameListComponent, GameDetailComponent } from '@avans-nx-workshop/features';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
export const appRoutes: Route[] = [
    // Hier komen onze URLs te staan.
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'games', component: GameListComponent },
  { path: 'games/:id', component: GameDetailComponent },

  

    { path: 'dashboard', component: DashboardComponent },
    { path: 'about', pathMatch: 'full', component: AboutComponent },
    { path: 'users', pathMatch: 'full', component: UserListComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'users/new', component: UserEditComponent },
    { path: 'users/:id/edit', component: UserEditComponent },
    {path: 'columns',component: ColumnsComponent, children:[
        {path: ':id', component: UserDetailsComponent}
    ] },




    { path: '**', redirectTo: 'dashboard'}
];
