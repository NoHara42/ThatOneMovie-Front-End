import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCriticModeText } from '../store/app.store';

@Injectable({
  providedIn: 'root'
})
export class CriticModeService {

  private criticModeText: string;
  private readonly BASE_URL = 'http://localhost:5000';

  constructor(private store: Store, private httpClient: HttpClient) { }

  getCriticModeRecommendationsFromBackend(criticModeText) {
    try {

      const params = new HttpParams().set("criticModeText", criticModeText);
      return this.httpClient.get(`${this.BASE_URL}/recommend/`, {params});

    } catch (error) {
      console.error(error);
    }
  }

  selectCriticModeText() {
    return this.store.select(selectCriticModeText);
  }
}
