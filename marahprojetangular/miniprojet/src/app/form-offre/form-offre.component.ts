import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Offre} from '../core/model/offre';
import {OffreService} from '../core/service/offre.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-offre',
  templateUrl: './form-offre.component.html',
  styleUrls: ['./form-offre.component.css']
})
export class FormOffreComponent implements OnInit {
  registerForm: FormGroup;
  offre: Offre;
  listoffre: Offre[];
  offree: string;
  @Input() offreeInput: string;
  constructor(private offreService: OffreService, private r: Router) { }

  ngOnInit(): void {
    this.offre = new Offre();
    this.registerForm = new FormGroup({
      id: new FormControl('', Validators.required),
      title_job: new FormControl('', Validators.required),
      profil: new FormControl('', [Validators.required]),
      Entreprise: new FormControl('', [Validators.required]),
      categorie: new FormControl('', [Validators.required]),
      sector: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      Date_start: new FormControl('', [Validators.required]),
      Date_end: new FormControl('', [Validators.required])
    });
    this.offreService.getOffre().subscribe(
      (data: Offre[]) => this.listoffre = data
    );
  }
  get job_title() {
    return this.registerForm.get('title_job');
  }
  get Entreprise() {
    return this.registerForm.get('Entreprise');
  }
  get profil() {
    return this.registerForm.get('profil');
  }
  get categorie() {
    return this.registerForm.get('categorie');
  }
  get sector() {
    return this.registerForm.get('sector');
  }
  get city() {
    return this.registerForm.get('city');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get description() {
    return this.registerForm.get('description');
  }
  get id() {
    return this.registerForm.get('id');
  }
  save(){
    this.offreService.addOffre(this.registerForm.value).subscribe(() => this.listoffre = [this.registerForm.value, this.listoffre]);
    this.r.navigate(['/home']);
  }
  delet(id){
    this.offreService.deletOffre(id).subscribe(() => this.listoffre = this.listoffre.filter(emp => emp.id !=  id));
  }
}
