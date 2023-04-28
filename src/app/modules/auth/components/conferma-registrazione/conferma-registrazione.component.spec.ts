import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermaRegistrazioneComponent } from './conferma-registrazione.component';

describe('ConfermaRegistrazioneComponent', () => {
  let component: ConfermaRegistrazioneComponent;
  let fixture: ComponentFixture<ConfermaRegistrazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfermaRegistrazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfermaRegistrazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
