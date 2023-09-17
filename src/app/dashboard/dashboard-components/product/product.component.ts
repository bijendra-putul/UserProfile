import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


export interface PeriodicElement {
  id: number;
  name: string;
  work: string;
  project: string;
  priority: string;
  badge: string;
  budget: string;
}

interface billable {
  value: string;
  viewValue: string;
}

interface FoodNode {

  mu: string;
  account: any;
  current: string;
  may:string;
  apr:string;
  children?: FoodNode[];
}
const TREE_DATA: FoodNode[] = [
  {
    mu: 'MAlS',
    account:"Total Account",
    current:"",
    may:'',
    apr:'',
    children: [
      {mu: 'MALS -1', account: 10, current:'',may:'', apr:''},
      {mu: 'MALS -2', account: 20, current:'',may:'', apr:''},
      {mu: 'MALS -3', account: 40, current:'',may:'', apr:''},
    ]
  },
  {
    mu: 'CPRS',
    account:"Total Account",
    current:"",
    may:'',
    apr:'',
    children: [
      {mu: 'CPRS-1', account: 10, current:'',may:'', apr:''},
      {mu: 'CPRS-2', account: 20, current:'',may:'', apr:''},
      {mu: 'CPRS-3', account: 40, current:'',may:'', apr:''},
    ]
  },
  {
    mu: 'EUC',
    account:"Total Account",
    current:"",
    may:'',
    apr:'',
    children: [
      {mu: 'CPRS-1', account: 10, current:'',may:'', apr:''},
      {mu: 'CPRS-2', account: 20, current:'',may:'', apr:''},
      {mu: 'CPRS-3', account: 40, current:'',may:'', apr:''},
    ]
  },
  {
    mu: 'TMMT',
    account:"Total Account",
    current:"",
    may:'',
    apr:'',
    children: [
      {mu: 'CPRS-1', account: 10, current:'',may:'', apr:''},
      {mu: 'CPRS-2', account: 20, current:'',may:'', apr:''},
      {mu: 'CPRS-3', account: 40, current:'',may:'', apr:''},
    ]
  },
  {
    mu: 'QMS',
    account:"Total Account",
    current:"",
    may:'',
    apr:'',
    children: [
      {mu: 'CPRS-1', account: 10, current:'',may:'', apr:''},
      {mu: 'CPRS-2', account: 20, current:'',may:'', apr:''},
      {mu: 'CPRS-3', account: 40, current:'',may:'', apr:''},
    ]
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  mu: string;
  account: any;
  current: any;
  may:any;
  apr:any;
  level: any;
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   { id: 1, name: 'Deep Javiya', work: 'Frontend Devloper', project: 'Flexy Angular', priority: 'Low', badge: 'badge-info', budget: '$3.9k' },
 
// ];


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  panelOpenState = false;
  name = 'Angular';
  show = true;
  apiurl = 'http://localhost:3000/mutable';
  mudata!: any[];
  //displayedColumns: string[] = ['mu', 'account', 'current', 'may', 'apr'];
  displayedColumns: string[] = ['mu', 'account', 'current', 'may', 'apr'];
  //dataSource = ELEMENT_DATA;
  billables: billable[] = [
    {value: 'billable-0', viewValue: 'Billable Fresher'},
    {value: 'fresher-1', viewValue: 'Fresher Pyramid'},
    {value: 'attrition-2', viewValue: 'Attrition'},
    {value: 'budgets-3', viewValue: 'TRIO Budgets Vs Actual'},
    {value: 'aws-4', viewValue: 'Hyper Scaler- Aws'},
    {value: 'rotation-5', viewValue: 'Rotation'},
  ];
 
  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      mu: node.mu,
      account: node.account,
      current: node.account,
      may:node.may,
      apr:node.apr,
      level: level,
    };
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);
  
  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, 
      node => node.expandable, node => node.children);
      dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router:Router, private http:HttpClient) { }
  
  ngOnInit(): void {
    this.getData();
    this.dataSource.data = TREE_DATA;
  }
  
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  getData(){
    this.http.get<any>('http://localhost:3000/mutable').subscribe(mudata =>{
      this.mudata = mudata;
      console.log(this.mudata);
    });
  }
  scoreCard(){
    this.router.navigateByUrl('/scorecard');
  }

  getDataWithFilter(selectedValue:string){
      const url = 'http://localhost:3000/mutable?filter=${selectedValue}';
      this.http.get<any[]>(url).subscribe(
        mudata => {this.mudata = mudata
        });   
  }
  graphchart(){
    this.router.navigateByUrl('/graphchart')
  }

}
