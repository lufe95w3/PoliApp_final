import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramasPage } from './programas.page';

describe('ProgramasPage', () => {
  let component: ProgramasPage;
  let fixture: ComponentFixture<ProgramasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
