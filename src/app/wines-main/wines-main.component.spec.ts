import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinesMainComponent } from './wines-main.component';

describe('WinesMainComponent', () => {
  let component: WinesMainComponent;
  let fixture: ComponentFixture<WinesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinesMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
