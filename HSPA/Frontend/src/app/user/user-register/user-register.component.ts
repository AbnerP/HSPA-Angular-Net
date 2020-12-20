import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserServiceService } from 'src/app/services/user-service.service';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: User;
  UserSubmitted:boolean;

  constructor(private fb: FormBuilder, private userService:UserServiceService, private alertify:AlertifyService) { }

  ngOnInit() {
    /*this.registrationForm = new FormGroup(
      {
        userName: new FormControl(null,Validators.required),
        email: new FormControl(null,[Validators.required,Validators.email]),
        password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
        confirmPassword: new FormControl(null,Validators.required),
        phoneNum: new FormControl(null,[Validators.required,Validators.minLength(10)])
      },
      this.passwordMathingValidator
      );*/

      this.createRegistrationForm();
  }

  userData(): User{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      phoneNum: this.phoneNum.value
    }
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: [null,Validators.required],
      email: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(8)]],
      confirmPassword: [null,Validators.required],
      phoneNum: [null,[Validators.required,Validators.minLength(10)]]
    },
    {validators:this.passwordMathingValidator}
    );
  }

  get userName(){
      return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get phoneNum(){
    return this.registrationForm.get('phoneNum') as FormControl;
  }

  passwordMathingValidator(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null:
    {notmatched: true};
  }

  onSubmit(){
    console.log(this.registrationForm)
    this.UserSubmitted = true;

    if (this.registrationForm.valid){
      //this.user = Object.assign(this.user,this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.UserSubmitted = false;
      this.alertify.success("You are succesfully registered!")
    }else{
      this.alertify.error("Some fields are invalid.")
    }

  }

}
