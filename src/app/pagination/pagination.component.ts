import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit{

  @Input() 
  currentPage: number;

  @Input()
  total: number = 0;

  @Input()
  limit: number;

  @Output()
  changePage = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit(): void {
    const pagesCount = Math.ceil(this.total / this.limit)
    this.pages = this.range(1, pagesCount)
  }

  range(start:number, end:number): number[] {
    return [...Array(end).keys()].map( el => el + start )
  }
}
