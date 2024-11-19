import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FechasInscripcionesPage } from './fechas-inscripciones.page';

describe('FechasInscripcionesPage', () => {
  let component: FechasInscripcionesPage;
  let fixture: ComponentFixture<FechasInscripcionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FechasInscripcionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
