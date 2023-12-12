import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'app/util/AppConstants';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DentalserviveService {


  
  token:string = '';
  isLoggedIn:boolean = false;

  constructor(private http:HttpClient,private router: Router) { }


  fetchalllist(){
    return this.http.get<>(AppConstants.ENDPOINT+'/user/expense/all');

  }
}
