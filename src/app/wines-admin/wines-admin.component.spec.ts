import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinesAdminComponent } from './wines-admin.component';

describe('WinesAdminComponent', () => {
  let component: WinesAdminComponent;
  let fixture: ComponentFixture<WinesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
