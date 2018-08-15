import { Injectable, Component } from '@angular/core';
import { HttpModule, Http, Request, RequestMethod, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

//Model
import { ResultModel } from './model';

@Component({
    providers: [Http]
})

@Injectable()

export class ResultService {
    public headers: Headers;
    public _getUrl: string = '/api/Values/GetResult';

    constructor(private _http: Http) { }

    //Get
    getall(): Observable<ResultModel[]> {
        return this._http.get(this._getUrl)
            .pipe(map(res => <ResultModel[]>res.json()))
            .pipe(catchError(this.handleError));
    }


    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Opps!! Server error');
    }
}