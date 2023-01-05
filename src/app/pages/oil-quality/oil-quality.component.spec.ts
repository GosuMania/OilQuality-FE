import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilQualityComponent } from './oil-quality.component';

describe('OilQualityComponent', () => {
  let component: OilQualityComponent;
  let fixture: ComponentFixture<OilQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OilQualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OilQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
