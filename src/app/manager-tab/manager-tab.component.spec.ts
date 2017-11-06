import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTabComponent } from './manager-tab.component';

describe('ManagerTabComponent', () => {
  let component: ManagerTabComponent;
  let fixture: ComponentFixture<ManagerTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
