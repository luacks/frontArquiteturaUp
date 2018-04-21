import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

	extractData(res: any){
    return res
  }


  save(data, id){
  		return this.http.put('http://localhost:8080/redooAlpha/rest/post/' + id, data)
  					.toPromise()
  					.then(this.extractData)
  					.catch(this.extractData)
  }

  get(id){
    return this.http.get(`http://localhost:8080/redooAlpha/rest/post/${id}/list`)
      .toPromise()
      .then(this.extractData)
      .catch(this.extractData)
  }

  like(id, likes){
    return this.http.post(`http://localhost:8080/redooAlpha/rest/post/${id}/like`, { likes })
      .toPromise()
      .then(this.extractData)
      .catch(this.extractData)
  }

  feed(array){
    return this.http.post(`http://localhost:8080/redooAlpha/rest/feed`, array)
      .toPromise()
      .then(this.extractData)
      .catch(this.extractData)
  }
  

}
