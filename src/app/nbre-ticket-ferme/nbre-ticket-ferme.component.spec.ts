import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreTicketFermeComponent } from './nbre-ticket-ferme.component';

describe('NbreTicketFermeComponent', () => {
  let component: NbreTicketFermeComponent;
  let fixture: ComponentFixture<NbreTicketFermeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbreTicketFermeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbreTicketFermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
