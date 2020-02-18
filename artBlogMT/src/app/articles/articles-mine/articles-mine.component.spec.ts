import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesMineComponent } from './articles-mine.component';

describe('ArticlesMineComponent', () => {
  let component: ArticlesMineComponent;
  let fixture: ComponentFixture<ArticlesMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
