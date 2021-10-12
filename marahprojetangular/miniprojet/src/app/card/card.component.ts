import {Component, Input, OnInit} from '@angular/core';
import {OffreService} from '../core/service/offre.service';
import {Offre} from '../core/model/offre';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  listOffre: Offre[];

  constructor(private service: OffreService) { }
  // offree: string;
  // @Input() offreeInput: string;
  ngOnInit(): void {
    this.service.getOffre().subscribe(
      (data: Offre[]) => this.listOffre = data
    );

  }

}
