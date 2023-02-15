import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiserviceService } from '../services/apiservice.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['name','email','phonenumber'];
    dataSource!: MatTableDataSource<any>;
  public username:any;
  

  constructor( private api : ApiserviceService , private router : Router) { }

  ngOnInit(): void {
    this.getAllContacts();
    this.username=this.api.getUserName();
  }

  getAllContacts(){
    this.api.getContact()
    .subscribe({
      next:(res)=>{
      this.dataSource = new MatTableDataSource(res);
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
    
  }

  logout() { 
   localStorage.removeItem('email')
   localStorage.removeItem('password')
   this.router.navigate([''])
  }

}
