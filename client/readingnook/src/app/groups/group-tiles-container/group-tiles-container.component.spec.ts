import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTilesContainerComponent } from './group-tiles-container.component';

describe('GroupTilesContainerComponent', () => {
  let component: GroupTilesContainerComponent;
  let fixture: ComponentFixture<GroupTilesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTilesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTilesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
