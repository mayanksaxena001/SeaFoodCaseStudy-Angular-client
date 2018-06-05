import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddentityComponent } from './addentity/addentity.component';
import { EditEntityComponent } from './editentity/editentity.component';
import { TransactentityComponent } from './transactentity/transactentity.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { AuthService } from './auth.service';

const routes: Routes = [];

@NgModule(
    {
        imports: [RouterModule.forRoot([
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent},
            { path: 'signup', component: SignupComponent },
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthService]},
            { path: '**', component: NotFoundComponent },
            { path: 'notFound', component: NotFoundComponent},
            
        ])],
        exports: [RouterModule]
    }
)

export class AppRoutingModule { }
export const routingComponents = [LoginComponent, SignupComponent, DashboardComponent, NotFoundComponent]