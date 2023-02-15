import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private http: HttpClient,private router:Router) { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    localStorage.setItem('email', this.form.value.email);
    localStorage.setItem('password', this.form.value.password);

    this.http.get<any>("http://localhost:3000/login")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.form.value.email && a.password === this.form.value.password
      });
      if(user){
        alert("Login Success");
        this.form.reset();
        this.router.navigate(['home'])
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong")
    })
  }
 


}
