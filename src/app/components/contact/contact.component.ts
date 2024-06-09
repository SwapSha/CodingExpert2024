import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorsMessagesComponent } from '../../core/errors-messages/errors-messages.component';
import { SharedModuleModule } from '../../shared/shared-module/shared-module.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,ErrorsMessagesComponent,SharedModuleModule],
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
    let payload = {
      fname: this.contactForm.value.fname,
      lname: this.contactForm.value.lname,
      address: this.contactForm.value.address,
      permanentAddress: this.contactForm.value.permanentAddress,
      contact1: this.contactForm.value.contact1,
      contact2: this.contactForm.value.contact2,
      email: this.contactForm.value.email,
      course: this.contactForm.value.course,
      profilePic: this.imagePreview,
      description: this.contactForm.value.description
    }
    console.log(payload);
    this.contactForm.reset();    
  }
  onFileChange(event:any){
    let file:any
    console.log("event : ",event);
    if(event.files[0]) file= event.files[0];
    else file= event[0];
    console.log("file : ",file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend  =  (event) => {
      console.log(file," && reader result : ",reader.result);
      this.imagePreview = reader.result;
    }
  }
  clearImage(){
    this.imagePreview = null;
  }
}
