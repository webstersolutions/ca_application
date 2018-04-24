import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmAddComponent } from './firm-add.component';

describe('FirmAddComponent', () => {
  let component: FirmAddComponent;
  let fixture: ComponentFixture<FirmAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
