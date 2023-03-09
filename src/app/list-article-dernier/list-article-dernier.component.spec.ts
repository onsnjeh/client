import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticleDernierComponent } from './list-article-dernier.component';

describe('ListArticleDernierComponent', () => {
  let component: ListArticleDernierComponent;
  let fixture: ComponentFixture<ListArticleDernierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArticleDernierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArticleDernierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
