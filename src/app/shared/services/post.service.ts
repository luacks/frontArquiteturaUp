import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  api: String = 'http://node8586-restup.br1.saphir.global/rest'

  constructor(private http: Http) { }

	extractData(res: any){
    return res
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
