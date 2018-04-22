import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  api: String = 'http://node8586-restup.br1.saphir.global/rest'
  // http://localhost:8080/redooAlpha/rest
  
  extractData(res: any){
    return res
  }

  save(data){
  	return this.http.put(this.api + '/usuario', data)
  			.toPromise()
  			.then(this.extractData)
            .catch(this.extractData)
  }

  login(data){
  	return this.http.post(this.api + '/usuario/auth', data)
		.toPromise()    
  		.then(this.extractData)
        .catch(this.extractData)
  }

  follow(id: Number, data: any){
  	return this.http.post(`${this.api}/usuario/follow/${id}`, data)
		.toPromise()
  		.then(this.extractData)
      .catch(this.extractData)
  }

  unfollow(id: Number, data: any){
  	return this.http.post(`${this.api}/usuario/unfollow/${id}`, data)
		.toPromise()
  		.then(this.extractData)
      .catch(this.extractData)
  }

  followers(id: Number){
    return this.http.get(`${this.api}/usuario/${id}/followers`)
    .toPromise()
      .then(this.extractData)
      .catch(this.extractData)
  }

  following(id: Number){
    return this.http.get(`${this.api}/usuario/${id}/following`)
    .toPromise()
      .then(this.extractData)
      .catch(this.extractData)
  }




}
