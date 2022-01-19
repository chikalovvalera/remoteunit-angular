import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutSideClickComponent } from './out-side-click.component';

describe('OutSideClickComponent', () => {
  let component: OutSideClickComponent;
  let fixture: ComponentFixture<OutSideClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutSideClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutSideClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
