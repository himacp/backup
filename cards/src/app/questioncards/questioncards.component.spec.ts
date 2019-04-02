import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestioncardsComponent } from './questioncards.component';

describe('QuestioncardsComponent', () => {
  let component: QuestioncardsComponent;
  let fixture: ComponentFixture<QuestioncardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestioncardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestioncardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
