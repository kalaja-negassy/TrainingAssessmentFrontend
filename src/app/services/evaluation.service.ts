import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(
    private http:HttpClient
  ) { }

  getResponses()
  {

  }

  evaluate(evaluationDetail)
  {
    return this.http.post('http://10.1.12.100:8000/evaluate',{...evaluationDetail});
  }

  getTotalParticipants()
  {
    return this.http.get('http://10.1.12.100:8000/totalParticipant');
  }
}
