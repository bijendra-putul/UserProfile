import { Component, OnInit,Inject, NgZone, PLATFORM_ID } from '@angular/core';
import zingchart from 'zingchart/es6';
//import {zingchart,ZC} from 'zingchart/es6';
// to import the pareto chart module


@Component({
  selector: 'app-graphchart',
  templateUrl: './graphchart.component.html',
  styleUrls: ['./graphchart.component.scss']
})
export class GraphchartComponent implements OnInit {
  billable  = "Billable Fressher %";
  fresher  = "Fresher Pyramid %";
  attrition = "Attrition";
  trio = "TRIO Budget vs Actual";
  hyperscale = "Hyperscale AWS";
  rotaion = "Rotaion";
  billable_left = "22%";
  billable_right = "31%";
  fresher_left = "31";
  fresher_right = "35";
  attrition_left = "22";
  attrition_right = "31";
  trio_left = "22";
  trio_right = "31";
  hyperscale_left = "22";
  hyperscale_right = "31";
  rotaion_left = "0";
  rotaion_right = "2000";

  
  ngOnInit(): void {
    var myConfig = {
      labels: [
        // Label poor
        {
          text: "poor",
          'font-family': "arial",
          'font-size': "10",
          "font-weight":"bold",
           x: "9%",
           y: "45%"
        },
         // Label Fair
        {
          text: "Fair",
          'font-family': "arial",
          'font-size': "10",
          "font-weight":"bold",
           x: "70%",
           y: "14%"
        },
         // Label Good
        {
          text: "Good",
          'font-family': "arial",
          'font-size': "10",
          "font-weight":"bold",
          x: "20%",
          y: "17%"
        },
         // Label Great
        {
          text: "Great",
          'font-family': "arial",
          'font-size': "10",
          "font-weight":"bold",
          x: "43%",
          y: "6%"
        },
          // Label Excellent
        {
          text: "Excellent",
          'font-family': "arial",
          'font-size': "10",
          "font-weight":"bold",
           x: "82%",
           y: "43%"
        },
        
      ],
     
      title: {
      "text": "Billable",
      "offset-y":"355"
    },
      "type": "gauge",
      "scale-r": {
        
        "aperture": 180,
        "values": "0:100:20",
        
        
        "center": {
          "size": 0,
          "background-color": "#66CCFF #FFCCFF",
          "border-color": "none"
        },
        "ring": {
          "size": 35,
          "rules": [{
              "rule": "%v >= 0 && %v <= 20",
              "background-color": "red"
            },
            {
              "rule": "%v >= 20 && %v <= 40",
              "background-color": "orange"
            },
            {
              "rule": "%v >= 40 && %v <= 60",
              "background-color": "yellow"
            },
            {
              "rule": "%v >= 60 && %v <= 80",
              "background-color": "#5ec998"
            },
            {
              "rule": "%v >= 80 && %v <=100",
              "background-color": "#06961e",
              
            }
          ]
        },
       
        
         //Scale Labels
        "item": { //Scale Label Styling
          "font-color": "#000",
          "font-family": "Arial, serif",
          "font-size": 0,
          "font-weight": "bold", //or "normal"
          "font-style": "normal", //or "italic"
          "offset-r": "0",
          "font-angle":"0",
          "align":"center"
          
        },
        
      },
      "plot": {
        "csize": "1%",
        "size": "100%",
        "background-color": "#000000",
        
        
      },
      
      "series": [{
        "values": [20],
        "indicator":[0,2,90,0,0],
      },
     
      
      ]
    };
    zingchart.render({
      id: 'myChart',
      data: myConfig,
      height: "250",
      width: "320"
  });
  zingchart.render({
    id: 'myChart2',
    data: myConfig,
    height: "250",
    width: "320"
});
zingchart.render({
  id: 'myChart3',
  data: myConfig,
  height: "250",
  width: "320"
});
zingchart.render({
  id: 'myChart4',
  data: myConfig,
  height: "250",
  width: "320"
});
zingchart.render({
  id: 'myChart5',
  data: myConfig,
  height: "250",
  width: "320"
});
zingchart.render({
  id: 'myChart6',
  data: myConfig,
  height: "250",
  width: "320"
});
  }
  
}
