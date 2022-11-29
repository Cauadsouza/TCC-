import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosFisicosComponent } from './exercicios-fisicos.component';

describe('ExerciciosFisicosComponent', () => {
  let component: ExerciciosFisicosComponent;
  let fixture: ComponentFixture<ExerciciosFisicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciosFisicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciciosFisicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
