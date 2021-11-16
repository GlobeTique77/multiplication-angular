import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-multiplication',
  templateUrl: './tables-multiplication.component.html',
  styleUrls: ['./tables-multiplication.component.css']
})
export class TablesMultiplicationComponent implements OnInit {

  @Input() nombreTab!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
