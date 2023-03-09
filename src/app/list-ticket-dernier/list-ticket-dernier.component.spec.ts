import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTicketDernierComponent } from './list-ticket-dernier.component';

describe('ListTicketDernierComponent', () => {
  let component: ListTicketDernierComponent;
  let fixture: ComponentFixture<ListTicketDernierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTicketDernierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTicketDernierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
