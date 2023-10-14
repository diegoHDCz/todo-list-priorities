import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDialogComponent } from './todos-dialog.component';

describe('TodosDialogComponent', () => {
  let component: TodosDialogComponent;
  let fixture: ComponentFixture<TodosDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosDialogComponent]
    });
    fixture = TestBed.createComponent(TodosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
