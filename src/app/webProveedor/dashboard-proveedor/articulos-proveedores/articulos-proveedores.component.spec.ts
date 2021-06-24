import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosProveedoresComponent } from './articulos-proveedores.component';

describe('ArticulosProveedoresComponent', () => {
  let component: ArticulosProveedoresComponent;
  let fixture: ComponentFixture<ArticulosProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
