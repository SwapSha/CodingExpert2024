import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { getValidatorErrorMessage } from './validators-utils';
import { log } from 'console';

@Component({
  selector: 'app-errors-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './errors-messages.component.html',
  styleUrl: './errors-messages.component.css'
})
export class ErrorsMessagesComponent {
    @Input() control!: AbstractControl

    get errorMessage() {
      for (const validatorName in this.control?.errors) {
          if(this.control.touched){
            let res = getValidatorErrorMessage(validatorName, this.control.errors[validatorName]);
            console.log(res);
            return res;
          }
      }
      return null;
    }
}
