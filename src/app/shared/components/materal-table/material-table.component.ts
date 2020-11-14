import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-materal-table',
  templateUrl: './materal-table.component.html',
  styleUrls: ['./materal-table.component.css']
})
export class MateralTableComponent implements OnInit, OnChanges {
  @Input() data:any;
  @Input() columns:Array<String>;
  @ViewChild(MatSort) sort: MatSort;
  tableData:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.data !== undefined){
      this.tableData = new MatTableDataSource(this.data);
      let reference = this.data[0];
      this.columns = Object.keys(reference).
      filter(colum => typeof(reference[colum]) === 'string');
      this.tableData.sort = this.sort;
    }
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableData.filter = filterValue.trim().toLocaleLowerCase();
  }

}
