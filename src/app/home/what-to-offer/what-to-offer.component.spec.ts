import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatToOfferComponent } from './what-to-offer.component';

describe('WhatToOfferComponent', () => {
  let component: WhatToOfferComponent;
  let fixture: ComponentFixture<WhatToOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatToOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatToOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
