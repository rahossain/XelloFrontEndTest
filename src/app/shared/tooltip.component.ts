import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.css']
})
export class ToolTipComponent  {
    @Input() messageText: string;
    @Output() toolTipClicked: EventEmitter<string> =
    new EventEmitter<string>();
    onClick(): void {
        this.toolTipClicked.emit(`You clicked on tooltip!`);
    }
}
