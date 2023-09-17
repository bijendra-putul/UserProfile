import { Component, OnInit, EventEmitter, Output } from '@angular/core';

interface mu {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'app-mutable',
  templateUrl: './mutable.component.html',
  styleUrls: ['./mutable.component.scss']
})
export class MutableComponent implements OnInit {
  selectedValue!: string;
  selected = 'mals-0';
  @Output() valueChange = new EventEmitter<string>();
  mus: mu[] = [
    {value: 'MALS', viewValue: 'MALS'},
    {value: 'CPRS', viewValue: 'CPRS'},
    {value: 'EUC', viewValue: 'EUC'},
    {value: 'TMMT', viewValue: 'TMMT'},
    {value: 'QMS', viewValue: 'QMS'},
    {value: 'ISMS', viewValue: 'ISMS'},
    
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
  onSelectChange(){
    this.valueChange.emit(this.selectedValue);
}

}
