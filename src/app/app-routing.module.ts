import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { HolidayTodayComponent } from './pages/holiday-today/holiday-today.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"countries",component:CountriesComponent},
  {path:"holiday-today",component:HolidayTodayComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
