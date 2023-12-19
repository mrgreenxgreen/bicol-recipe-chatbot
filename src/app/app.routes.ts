import { Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactsComponent } from '../pages/contacts/contacts.component';

export const routes: Routes = [
    { path:'home-component', component: HomeComponent},
    { path:'about-component', component: AboutComponent},
    { path:'contacts-component', component: ContactsComponent},
];
