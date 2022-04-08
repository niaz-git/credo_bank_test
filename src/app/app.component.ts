import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'credoTest';
  barLabel: string = "more than 8 characters, 1 upper case letter, and 1  special character";  
  formSubmitMesg:string;

  createForm:FormGroup;
 // model: NgbDateStruct;
 constructor(private fb: FormBuilder){ }


  ngOnInit() {
    this.createForm = this.fb.group(
      {
        fname: ["",  [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(/^[A-z0-9]*$/)

        ]],
        email: [null,  [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

        ]],
        phone: [null,  [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern(/^[0-9]*$/)

        ]],
      
        password: ["",  [
         // Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
          )
        ]],
        dob: [null,  [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ]],
      }
    );
  }
  onStrengthChange(score:any) {
    console.log('new score', score);
  }


  get f(): { [key: string]: AbstractControl } {
    return this.createForm.controls;
  }


  onSubmit():void{
    if(this.createForm.valid)
    this.formSubmitMesg = "Please wait.. data processing"
    else{
    this.formSubmitMesg = "registration data error: kindly re-enter"
      this.createForm.reset()
    }

  }
 



}
