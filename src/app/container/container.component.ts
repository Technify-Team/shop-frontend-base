import { Component } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],

})
export class ContainerComponent {

  currentPage : number = 1;

  // handlePageEvent(pageEvent: PageEvent) {
  //   console.log('handlePageEvent', pageEvent);
  //   this.currentPage = pageEvent.pageIndex;
  // }

  // changePage(page: number): void {
  //   this.currentPage = page
  // }

}
