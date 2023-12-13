import { Component, OnInit } from '@angular/core';
import { DentalserviveService } from 'app/service/dentalservive.service';
import { Patient } from 'app/util/Patient';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


  patient :Patient[];
  constructor(private dentalService:DentalserviveService) { }

  ngOnInit() {
    this.dentalService.fetchalllist()
      .subscribe((pats: Patient[]) => {
        this.patient = pats;
      })
    console.log(this.patient);
  }


}
