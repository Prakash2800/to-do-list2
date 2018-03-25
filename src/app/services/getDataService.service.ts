import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetDataService {
    item: Array<any>;

    constructor (private http: HttpClient) {}

    public publishData (): any {
        this.http.get('assets/data/items.json')
            .subscribe(
                (data: any[]) => { this.item = data; }
        );
    }

}
