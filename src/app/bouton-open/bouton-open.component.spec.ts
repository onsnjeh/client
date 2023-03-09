import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonOpenComponent } from './bouton-open.component';

describe('BoutonOpenComponent', () => {
  let component: BoutonOpenComponent;
  let fixture: ComponentFixture<BoutonOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
