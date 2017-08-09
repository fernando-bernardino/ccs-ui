import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudspaceComponent } from './cloudspace.component';

describe('CloudspaceComponent', () => {
  let component: CloudspaceComponent;
  let fixture: ComponentFixture<CloudspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
