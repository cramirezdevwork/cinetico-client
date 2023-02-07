import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineticoComponent } from './cinetico.component';

describe('CineticoComponent', () => {
  let component: CineticoComponent;
  let fixture: ComponentFixture<CineticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CineticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CineticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
