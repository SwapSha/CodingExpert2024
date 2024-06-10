import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ErrorsMessagesComponent } from '../../core/errors-messages/errors-messages.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterLink,ErrorsMessagesComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup;
  isFormValid:boolean = false;
  constructor(private formBuild :FormBuilder ){
    this.loginForm = this.formBuild.group({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  onFormSubmit(){
    if(this.loginForm.invalid) this.isFormValid = true;
    console.log(this.loginForm.value);
  }
}
