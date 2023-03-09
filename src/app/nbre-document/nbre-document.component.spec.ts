import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreDocumentComponent } from './nbre-document.component';

describe('NbreDocumentComponent', () => {
  let component: NbreDocumentComponent;
  let fixture: ComponentFixture<NbreDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbreDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbreDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
