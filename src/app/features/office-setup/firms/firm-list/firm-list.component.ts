import { Component, OnInit } from '@angular/core';
import { FirmService } from '../../../../shared/services/firm/firm.service';

@Component({
  selector: 'app-firm-list',
  templateUrl: './firm-list.component.html',
  styleUrls: ['./firm-list.component.scss']
})
export class FirmListComponent implements OnInit {

  firms: any;

  constructor(
    private firmService: FirmService
  ) { }

  ngOnInit() {
    this.firmService.getFirmItems().subscribe(
      value => {
        this.firms = value;
      }
    );
  }

}
