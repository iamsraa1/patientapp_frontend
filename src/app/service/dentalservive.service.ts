import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'app/util/AppConstants';
import { Patient } from 'app/util/Patient';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DentalserviveService {


  
  token:string = '';
  isLoggedIn:boolean = false;

  constructor(private http:HttpClient,private router: Router) { }

  private handleError(error:any){
    if(error.status==0){
    alert('An error occurred: '+"Connection Refused");
  } else {

    if(error.error.hasOwnProperty('message')){
      alert(error.error.message);
    }
    }
    return throwError('An error occured');

    
  }
  fetchalllist(){
    return this.http.get<Patient>(AppConstants.ENDPOINT+'/getpat').pipe(catchError(this.handleError));;

  }
}
