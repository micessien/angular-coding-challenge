import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEntrepotComponent } from './create-entrepot.component';

describe('CreateEntrepotComponent', () => {
  let component: CreateEntrepotComponent;
  let fixture: ComponentFixture<CreateEntrepotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEntrepotComponent]
    });
    fixture = TestBed.createComponent(CreateEntrepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
