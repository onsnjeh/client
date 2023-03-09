import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreTicketOuvertComponent } from './nbre-ticket-ouvert.component';

describe('NbreTicketOuvertComponent', () => {
  let component: NbreTicketOuvertComponent;
  let fixture: ComponentFixture<NbreTicketOuvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbreTicketOuvertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbreTicketOuvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
