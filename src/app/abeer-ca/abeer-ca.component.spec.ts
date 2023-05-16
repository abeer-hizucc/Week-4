import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbeerCaComponent } from './abeer-ca.component';

describe('AbeerCaComponent', () => {
  let component: AbeerCaComponent;
  let fixture: ComponentFixture<AbeerCaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbeerCaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbeerCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
