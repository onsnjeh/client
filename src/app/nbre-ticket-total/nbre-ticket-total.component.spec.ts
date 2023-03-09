import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreTicketTotalComponent } from './nbre-ticket-total.component';

describe('NbreTicketTotalComponent', () => {
  let component: NbreTicketTotalComponent;
  let fixture: ComponentFixture<NbreTicketTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbreTicketTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbreTicketTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
