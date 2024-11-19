import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoUniversidadPage } from './info-universidad.page';

describe('InfoUniversidadPage', () => {
  let component: InfoUniversidadPage;
  let fixture: ComponentFixture<InfoUniversidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUniversidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
