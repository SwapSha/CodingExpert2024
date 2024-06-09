import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsMessagesComponent } from './errors-messages.component';

describe('ErrorsMessagesComponent', () => {
  let component: ErrorsMessagesComponent;
  let fixture: ComponentFixture<ErrorsMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorsMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
