import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Offre} from '../model/offre';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OffreService {
  url: 'http://localhost:3000/Offre';
  constructor(private http: HttpClient) {
  }
  getOffre() {
    return this.http.get<Offre[]>( 'http://localhost:3000/Offre/');
  }

  addOffre(e: Offre){
    return this.http.post( 'http://localhost:3000/Offre/', e);
  }
  deletOffre(id){
    return this.http.delete('http://localhost:3000/Offre/' + id);
  }
  getOffreById(id: number): Observable<Offre[]>{
    return this.http.get<Offre[]>('http://localhost:3000/Offre/' + id);
  }
  updateoffre(offre: Offre): Observable<Offre>{
    return this.http.put<Offre>('http://localhost:3000/Offre/' + offre.id , offre);
  }
}
