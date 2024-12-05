import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { TeamComponent } from './team/team.component';
import { ParentComponent } from './parent/parent.component';
import { TrainneeComponent } from './trainnee/trainnee.component';
import { AuthenticationComponent } from './authentication/authentication.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'emp',component:EmployeeComponent},
    {path:'about',component:AboutusComponent},
    {path:'pipes',component:PipesdemoComponent},
    {path:'login',component:LoginComponent},
    {path:'contact',component:ContactComponent},
    {path:'deat',component:DetailsComponent},
    {path:'team',component:TeamComponent},
    {path:'parent',component:ParentComponent},
    {path:'trainee',component:TrainneeComponent},
    {path:'auth',component:AuthenticationComponent},







];
