import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { ProductsComponent } from './Pages/products/products.component';

export const routes: Routes = [
    {
        path: "home",
        component: ProductsComponent
    },
    {
        path: "",
        component: LoginComponent
    }
];
