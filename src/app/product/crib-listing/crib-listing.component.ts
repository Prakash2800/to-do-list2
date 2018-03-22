import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.scss']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../data/cribs.json')
        .subscribe(
            data => console.log(data)
        );
  }

}
