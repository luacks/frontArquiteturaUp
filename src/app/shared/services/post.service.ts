import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  api: String = 'http://localhost:8080/redooAlpha/rest'

  constructor(private http: Http) { }

	extractData(res: any){
    try{
      let json = JSON.parse(res._body)
      return json
    }catch(err){
      return { error: "wtf" }
    }
  }

  save(data, id){
  		return this.http.put(this.api + '/post/' + id, data)
  					.toPromise()
  					.then(this.extractData)
  					.catch(this.extractData)
  }

  get(id){
    return this.http.get(`${this.api}/post/${id}/list`)
      .toPromise()
      .then(this.extractData)
      .catch(this.extractData)
  }

  like(id, likes){
    return this.http.post(`${this.api}/post/${id}/like`, { likes })
      .toPromise()
      .then(this.extractData)
      .catch(this.extractData)
  }

  feed(array){
    return this.http.post(`${this.api}/feed`, array)
      .toPromise()
      .then(this.extractData)
      .catch(this.extractData)
  }
  
  delete(id: Number){
    return this.http.delete(`${this.api}/post/${id}`)
      .toPromise()
      .then(this.extractData)
       .catch(this.extractData)
  }

}
