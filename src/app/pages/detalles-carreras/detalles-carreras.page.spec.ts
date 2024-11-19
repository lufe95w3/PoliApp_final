import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesCarrerasPage } from './detalles-carreras.page';

describe('DetallesCarrerasPage', () => {
  let component: DetallesCarrerasPage;
  let fixture: ComponentFixture<DetallesCarrerasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesCarrerasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
