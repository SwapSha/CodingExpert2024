import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorsMessagesComponent } from '../../core/errors-messages/errors-messages.component';
import { read } from 'fs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,ErrorsMessagesComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  activeModal = inject(NgbActiveModal);
  contactForm: FormGroup;
  isFormValid:boolean = false;
  imagePreview: any;
  courseList : any = [
    {courseName:'C',value:'c'},
    {courseName:'C++',value:'c++'},
    {courseName:'Angular',value:'angular'},
    {courseName:'React',value:'react'},
    {courseName:'Vue',value:'vue'},
    {courseName:'Javascript',value:'java'},
    {courseName:'DotNet',value:'dotnet'},
    {courseName:'Git and GitHub',value:'fullgit'},
  ]
  constructor(private fb:FormBuilder){
    this.contactForm = this.fb.group({
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      permanentAddress: new FormControl('',[Validators.required]),
      contact1: new FormControl('',[Validators.required]),
      contact2: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      course: new FormControl('',[Validators.required]),
      profilePic: new FormControl('',[Validators.required]),
      description: new FormControl('')
    });
  }

  submitForm(){
    console.log(this.contactForm);
    if(this.contactForm.valid){
      this.isFormValid = true;
      return;
    }
  }
  onFileChange(event:any){
    let file= event.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(file);
    reader.onloadend  =  (event) => {
      this.imagePreview = reader.result;
    }
  }
  clearImage(){
    this.imagePreview = null;
  }
}
