import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosComponent } from './carros.component';

describe('CarrosComponent', () => {
  let component: CarrosComponent;
  let fixture: ComponentFixture<CarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
