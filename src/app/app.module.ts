import { BillingComponent } from './billing/billing.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { ProductslistComponent } from './productslist/productslist.component';
const appRoutes: Routes =[
  {path: 'dashboard', component: AccountComponent},
  {path: 'billing', component: BillingComponent},
  {path: 'login', component: LoginComponent},
  {path:'availableproducts',component:ProductslistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    AccountComponent,
    LoginComponent,
    ProductslistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
