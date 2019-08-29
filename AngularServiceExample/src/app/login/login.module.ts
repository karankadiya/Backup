import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {AppModule} from '../app.module';
import {SharedModule} from '../shared.module';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: ''
    }

  }
];

// @ts-ignore
@NgModule({
  imports: [

    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    LoginComponent
  ]
})

export class LoginModule {

}

