import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  toolTipMessage :string = "";
  isToolTipVisible :boolean = true;
  left : string = "20%";
  button1text :string = "One"
  
  readonly ESCAPE_KEYCODE  = 27;
  
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {    
        this.isToolTipVisible = !(event.keyCode === this.ESCAPE_KEYCODE);
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    this.isToolTipVisible = false;
    let id = (<HTMLDivElement>event.target).id;
    this.isToolTipVisible = (id==="button1" || id==="button2" || id==="tooltip" || id === "tooltipContainer") ;
  } 

  onClickButtonOne():void
  {
      this.isToolTipVisible = true;
      this.toolTipMessage = "You clicked on Button One!"
      this.left  = "20%"
  }
  onClickButtonTwo():void
  {    
    this.isToolTipVisible = true;
    this.toolTipMessage = "You clicked on Button Two!"
    this.left  = "50%" 
  }
   onTooltipClicked(message: string): void 
   {
    this.toolTipMessage = message
    this.isToolTipVisible = true;
  }
}
