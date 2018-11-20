import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberCuroCriadoComponent } from './receber-curo-criado.component';

describe('ReceberCuroCriadoComponent', () => {
  let component: ReceberCuroCriadoComponent;
  let fixture: ComponentFixture<ReceberCuroCriadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceberCuroCriadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceberCuroCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
