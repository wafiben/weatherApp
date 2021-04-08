import { AuthGuardService } from './services/auth-guard.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFireLite } from 'angularfire-lite';
import { WeatherCardComponent } from './weather-card/weather-card.component';
const routes: Routes = [
  {path: '', component: HomeComponent,canActivate: [AuthGuardService]},
  {path: 'details/:city', component: DetailsComponent,canActivate: [AuthGuardService]},
  {path: 'add', component: AddComponent,canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent,canActivate: [AuthGuardService]},
  {path: 'signup', component: SignupComponent,canActivate: [AuthGuardService]},
  {path: '**', redirectTo: ''}];
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent,
    AddComponent,
    LoginComponent,
    SignupComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireLite.forRoot(environment.Config)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
