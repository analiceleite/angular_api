import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { ProductsComponent } from './Pages/products/products.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "products",
        component: ProductsComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
];
