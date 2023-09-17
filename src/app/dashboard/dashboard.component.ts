import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import {ProductComponent} from './dashboard-components/product/product.component';
import {MutableComponent} from './dashboard-components/mutable/mutable.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnInit { 
  ReadMore:boolean = true
  visible:boolean = false
  thisbtnContent = true;
  isValid: boolean = true;	
  isShow = true;		 
  myThenBlock!: TemplateRef<any>
  myElseBlock!: TemplateRef<any>	
  
  onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }
  ngOnInit() {
  }
  changeValue(valid: boolean) {
    this.isValid = valid;
  }
  toggleThenBlock() {
   
  }
  



featureHide() {
 this.isShow= false;
};
  @ViewChild(ProductComponent)
  productComponent!: ProductComponent;
  @ViewChild(MutableComponent) mutableComponent!:MutableComponent;

  constructor() { }

  ngAfterViewInit(): void {
    this.mutableComponent.valueChange.subscribe(
      selectedValue =>{
        this.productComponent.getDataWithFilter(selectedValue);
      }
    )
  }

}
