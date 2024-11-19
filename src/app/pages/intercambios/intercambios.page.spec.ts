import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntercambiosPage } from './intercambios.page';

describe('IntercambiosPage', () => {
  let component: IntercambiosPage;
  let fixture: ComponentFixture<IntercambiosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercambiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
