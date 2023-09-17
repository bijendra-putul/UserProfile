import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {
  title:string = "ScoreCard 2022"
  apiurl:string = 'http://localhost:3000/scorecard';
  scoreData!:any[];
  filteredScore!: any[];
  filterBy: any;
  
  //datas: any;
 
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getScoreData();
    this.filter();
    
  }
  get gridHeaders(): Array<string> {
    return Object.keys(this.scoreData[0]);
}
  getScoreData(){
    this.http.get<any>(this.apiurl).subscribe(scoreData =>{
      this.scoreData = scoreData;
      this.filteredScore = [...this.scoreData];
      console.log(this.scoreData);
      console.log(this.filteredScore);
    });
  }
  filter() {
    this.filteredScore = [...this.scoreData.filter(score => score.description.includes(this.filterBy))];
  }
  
}
