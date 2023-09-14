import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent, title:'Home'},
  {path:'about', component:AboutComponent, title:'About Page'},
  {path:'portfolio', component:PortfolioComponent, title:'Portfolio Page'},
  {path:'contact', component:ContactComponent, title:'Contact Page'},
  {path:'contact', component:ContactComponent, title:'Contact Page'},
  {path:'movies', component:MoviesComponent, title:'Movies Page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
