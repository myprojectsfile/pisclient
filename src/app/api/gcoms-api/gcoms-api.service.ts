import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http'
import { Observable} from 'rxjs/Observable'

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';

import {IGhabzAnbarInfo} from './gcoms-model-def'

// const gcomsApiBaseUrl='http://localhost:50167/api/';
const gcomsApiBaseUrl='http://109.230.101.80:443/api/';

@Injectable()
export class GcomsApiService {


  constructor(private _http: Http) {
  }

  getLikeOwner(name:string):Observable<IGhabzAnbarInfo[]> {
    let path=gcomsApiBaseUrl+'GetGhabzAnbarLikeName/'+name;
    return this._http.get(path)
    .map((response:Response)=> <IGhabzAnbarInfo[]> response.json())
    .do(data=>console.log(JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(error:Response){
    if (error.status==404) {
      return Observable.throw('هیچ قبض انباری با این مشخصات وجود ندارد')
    }
    return Observable.throw(error.text);
  }
}
