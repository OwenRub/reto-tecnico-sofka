import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesListaComponent } from './naves-lista.component';

describe('NavesListaComponent', () => {
  let component: NavesListaComponent;
  let fixture: ComponentFixture<NavesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
