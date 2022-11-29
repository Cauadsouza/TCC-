import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosAlimentaresComponent } from './planos-alimentares.component';

describe('PlanosAlimentaresComponent', () => {
  let component: PlanosAlimentaresComponent;
  let fixture: ComponentFixture<PlanosAlimentaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanosAlimentaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanosAlimentaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
