import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  extractData(res: any){
    return res
  }

  save(data){
  	return this.http.put('http://localhost:8080/redooAlpha/rest/usuario', data)
  			.toPromise()
  			.then(this.extractData)
            .catch(this.extractData)
  }

  login(data){
  	return this.http.post('http://localhost:8080/redooAlpha/rest/usuario/auth', data)
		.toPromise()
  		.then(this.extractData)
        .catch(this.extractData)
  }



}
