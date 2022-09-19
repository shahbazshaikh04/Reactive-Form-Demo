import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomValidationExampleComponent } from './custom-validation-example/custom-validation-example.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { FormControlExampleComponent } from './form-control-example/form-control-example.component';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'formControl',
    pathMatch: 'full'
  },
  {
    path: 'formControl',
    component: FormControlExampleComponent
  },
  {
    path: 'formGroup',
    component: FormGroupExampleComponent
  },
  {
    path: 'customValidation',
    component: CustomValidationExampleComponent
  },
  {
    path: 'formArray',
    component: FormArrayExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
