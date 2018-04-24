import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FirmService } from '../../../../shared/services/firm/firm.service';

@Component({
  selector: 'app-firm-add',
  templateUrl: './firm-add.component.html',
  styleUrls: ['./firm-add.component.scss']
})
export class FirmAddComponent implements OnInit {

  firm: any;

  constructor(
    private firmService: FirmService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  addFirm(f) {
    console.log(f.value);
    this.firmService.addFirm(f.value).subscribe(
      value => {
        this.firm = value;
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      error => {
        alert(error);
      }
    );
  }

}
