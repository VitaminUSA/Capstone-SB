import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreLinkComponent } from './genre-link.component';

describe('GenreLinkComponent', () => {
  let component: GenreLinkComponent;
  let fixture: ComponentFixture<GenreLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
