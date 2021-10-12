import { Component, OnInit } from '@angular/core';
import {OffreService} from '../core/service/offre.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-offre',
  templateUrl: './edit-offre.component.html',
  styleUrls: ['./edit-offre.component.css']
})
export class EditOffreComponent implements OnInit {
  offre: any = [];
  constructor(private serviceOffre: OffreService, private  serviceRoute: ActivatedRoute, private  r: Router) { }

  ngOnInit(): void {
    this.serviceOffre.getOffreById(this.serviceRoute.snapshot.params.id).subscribe(data => {
      this.offre = data;
    });
  }
  edit(){
    this.serviceOffre.updateoffre(this.offre).subscribe(data => {
      this.offre = data; } );
    this.r.navigate(['/form']);
  }

}
