import { Injectable } from '@angular/core';
import { People } from './people.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  formData: People;
  readonly rootURL = 'https://localhost:44310/api';
  lstPeople: People[];

  constructor(private http: HttpClient) { }

  postPeople() {
    return this.http.post(this.rootURL + '/People', this.formData);
  }

  putPeople() {
    return this.http.put(this.rootURL + '/People/' + this.formData.matricula, this.formData);
  }

  deletePeople(id) {
    return this.http.delete(this.rootURL + '/People/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/People')
      .toPromise()
      .then(res => {
        this.lstPeople = res as People[];
      })
  }
}
