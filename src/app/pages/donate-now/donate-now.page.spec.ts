import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonateNowPage } from './donate-now.page';

describe('DonateNowPage', () => {
  let component: DonateNowPage;
  let fixture: ComponentFixture<DonateNowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateNowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonateNowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
