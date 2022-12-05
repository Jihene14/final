import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Commentaire } from '../class/comment';
const  URL= 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class CommentaireserviceService {


  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<Commentaire[]> {
    return this.httpClient.get<Commentaire[]>(
      URL+'/Commentaire'
    );
  }

  
    }