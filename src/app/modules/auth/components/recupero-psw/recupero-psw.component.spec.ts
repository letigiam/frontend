import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperoPswComponent } from './recupero-psw.component';

describe('RecuperoPswComponent', () => {
  let component: RecuperoPswComponent;
  let fixture: ComponentFixture<RecuperoPswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperoPswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperoPswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
