import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSushishopComponent } from './page-sushishop.component';

describe('PageSushishopComponent', () => {
  let component: PageSushishopComponent;
  let fixture: ComponentFixture<PageSushishopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSushishopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSushishopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
