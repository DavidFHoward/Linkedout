import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyClipboardButtonComponent } from './copy-clipboard-button.component';

describe('CopyClipboardButtonComponent', () => {
  let component: CopyClipboardButtonComponent;
  let fixture: ComponentFixture<CopyClipboardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyClipboardButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopyClipboardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
