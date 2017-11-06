import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingTabComponent } from './offering-tab.component';

describe('OfferingTabComponent', () => {
  let component: OfferingTabComponent;
  let fixture: ComponentFixture<OfferingTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferingTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
