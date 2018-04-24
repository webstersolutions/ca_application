import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class FirmService {

  constructor(private http: HttpClient) { }

  getFirmItems() {
    return this.http.get('api/firms');
  }

  addFirm(firm) {
    return this.http.post('api/firms', firm);
  }


}
