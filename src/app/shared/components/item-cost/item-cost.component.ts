import {Component, OnInit, Input} from '@angular/core';
import {DropdownComponent} from "../../input/dropdown/dropdown.component";
import {Appliance} from "../../../shared/model/Appliance";
import {NumericInputComponent} from "../../../shared/input/numeric/numeric-input.component";

@Component({
    moduleId: module.id,
    selector: 'item-cost',
    templateUrl: 'item-cost.component.html',
    styleUrls: ['item-cost.component.css'],
    directives: [DropdownComponent, NumericInputComponent]
})

export class ItemCostComponent implements OnInit{
    @Input() appliance: Appliance;
    applianceList: string[] = [
        'TV/Monitor',
        'Lightbulb',
        'Washing Machine'
    ]

    ngOnInit(){
    }

    get diagnostic() { return JSON.stringify(this.appliance, null, 4); }

}
