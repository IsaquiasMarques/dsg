import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBiggerScreensComponent } from './banner-bigger-screens.component';

describe('BannerBiggerScreensComponent', () => {
  let component: BannerBiggerScreensComponent;
  let fixture: ComponentFixture<BannerBiggerScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerBiggerScreensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerBiggerScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
