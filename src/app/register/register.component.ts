import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profileForm !: FormGroup;

  constructor(private formBuilder:FormBuilder , private api : ApiserviceService, private router : Router) { }


  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      name:['',[Validators.required, Validators.pattern('^[a-zA-Z\s]*$')]],
      email: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phonenumber :['',[Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
    });
  }

  get f()
{
    return this.profileForm.controls;
}

  addContact(){
    if(this.profileForm.valid){
      console.log(this.profileForm.value)
      this.api.postContact(this.profileForm.value)
      .subscribe({
        next:(res)=>{
          alert("Contact added successfully")
          this.profileForm.reset();
          this.router.navigate(['login'])
        },
        error:()=>{
          alert("Error while adding the contact")
        }
      })
    }
  }
  

}
