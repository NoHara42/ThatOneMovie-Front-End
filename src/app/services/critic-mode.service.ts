import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCriticModeText } from '../store/app.store';

@Injectable({
  providedIn: 'root'
})
export class CriticModeService {

  private criticModeText: string;
  private readonly BASE_URL = 'http://localhost:5000';

  constructor(private store: Store, private httpClient: HttpClient) { }

  postCriticModeTextToBackend(criticModeText) {
    try {
      this.httpClient.post(`${this.BASE_URL}/recommend`, criticModeText).subscribe((response) => {
        console.log(response)
      });
    } catch (error) {
      console.error(error);
    }
  }

  selectCriticModeText() {
    return this.store.select(selectCriticModeText);
  }
}
