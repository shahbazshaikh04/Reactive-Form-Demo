import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidationExampleComponent } from './custom-validation-example/custom-validation-example.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { FormControlExampleComponent } from './form-control-example/form-control-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FormGroupExampleComponent,
    CustomValidationExampleComponent,
    FormArrayExampleComponent,
    FormControlExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
