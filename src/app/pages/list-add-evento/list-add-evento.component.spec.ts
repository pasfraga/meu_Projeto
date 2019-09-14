import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddEventoComponent } from './list-add-evento.component';

describe('ListAddEventoComponent', () => {
  let component: ListAddEventoComponent;
  let fixture: ComponentFixture<ListAddEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAddEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
