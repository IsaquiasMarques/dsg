import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {

  public hasMenuToShow: boolean = false;

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnDestroy(): void {
    
  }

  changeMenuStatus(){
    this.hasMenuToShow = ! this.hasMenuToShow;
  }


}
