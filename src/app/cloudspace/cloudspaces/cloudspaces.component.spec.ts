import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudspacesComponent } from './cloudspaces.component';

describe('CloudspacesComponent', () => {
  let component: CloudspacesComponent;
  let fixture: ComponentFixture<CloudspacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudspacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudspacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
