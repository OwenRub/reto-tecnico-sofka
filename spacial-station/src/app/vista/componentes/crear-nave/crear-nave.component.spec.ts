import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNaveComponent } from './crear-nave.component';

describe('CrearNaveComponent', () => {
  let component: CrearNaveComponent;
  let fixture: ComponentFixture<CrearNaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearNaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
