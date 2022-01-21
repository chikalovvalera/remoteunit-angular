import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAreaComponent } from './server-area.component';

describe('ServerAreaComponent', () => {
  let component: ServerAreaComponent;
  let fixture: ComponentFixture<ServerAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
