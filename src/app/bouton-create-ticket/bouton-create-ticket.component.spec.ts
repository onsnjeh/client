import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonCreateTicketComponent } from './bouton-create-ticket.component';

describe('BoutonCreateTicketComponent', () => {
  let component: BoutonCreateTicketComponent;
  let fixture: ComponentFixture<BoutonCreateTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonCreateTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonCreateTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
