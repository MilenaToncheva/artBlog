import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInitialComponent } from './article-initial.component';

describe('ArticleInitialComponent', () => {
  let component: ArticleInitialComponent;
  let fixture: ComponentFixture<ArticleInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
