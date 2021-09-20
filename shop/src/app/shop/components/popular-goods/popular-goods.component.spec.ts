import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularGoodsComponent } from './popular-goods.component';

describe('PopularGoodsComponent', () => {
  let component: PopularGoodsComponent;
  let fixture: ComponentFixture<PopularGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularGoodsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
