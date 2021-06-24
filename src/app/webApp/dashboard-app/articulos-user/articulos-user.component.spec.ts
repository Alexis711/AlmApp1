import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosUserComponent } from './articulos-user.component';

describe('ArticulosUserComponent', () => {
  let component: ArticulosUserComponent;
  let fixture: ComponentFixture<ArticulosUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
