import { EvaluationService } from 'src/app/services/evaluation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(
    private evaluationService:EvaluationService
  ) { }

  ngOnInit(): void {
    this.getReport();
  }

cardsData= [];
cardSize=[350,150];
cardColor: string = "#232837";
cardVisible:boolean = false;
  getReport()
  {
    this.evaluationService.getTotalParticipants().subscribe(res =>
      {
        this.cardsData.push({
          name:'Total Participants',
          value:res
        });
        this.cardVisible = true;
      })
  }
}
