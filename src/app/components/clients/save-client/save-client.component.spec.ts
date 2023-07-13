import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveClientComponent } from './save-client.component';

describe('SaveClientComponent', () => {
  let component: SaveClientComponent;
  let fixture: ComponentFixture<SaveClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveClientComponent]
    });
    fixture = TestBed.createComponent(SaveClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
