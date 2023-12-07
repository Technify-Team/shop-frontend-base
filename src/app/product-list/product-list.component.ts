import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Product } from './products';
import { PageEvent } from '@angular/material/paginator';
import { ProductsService } from './products.service';
import { Order, SearchRequest } from 'src/core/interfaces/search-request.interface';
import { SelectItemGroup } from 'primeng/api';

interface Sorting {
  name: string;
  code: {
    fieldName: string;
    order: Order;
  }
}


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  itemsCount = 0;

  isLoading: boolean = false;

  pageSize: number = 6;
  currentPage : number = 0;
  sortField = "id";
  sortDirection = Order.desc;

  products: Product[] = [];

  selectedItem : Sorting;
  sorting: Sorting[];

  // showClear = true;

  


  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.processData();

    this.sorting = [
      { 
        name: 'Сортувати за рейтингом', 
        code: {
          fieldName: "rating",
          order: Order.desc
        } 
      },
      { name: 'Спочатку найдешевші', 
        code: {
          fieldName: "price",
          order: Order.asc
        },
      },
      { name: 'Спочатку найдорожчі', 
        code:  {
          fieldName: "price",
          order: Order.desc
        }
      },
      { name: 'Популярні', 
        code: {
          fieldName: "price",
          order: Order.asc
        }
      },
    ]
  }

  processData(){
    this.isLoading = true;
    this.productsService.getProducts({
      skip: this.currentPage * this.pageSize,
      take: this.pageSize,
      orderBy: {
        fieldName: "price",
        order: this.sortDirection
      }
    }).subscribe(res => {
      this.itemsCount = res.itemsCount;
      this.products = res.items;
      this.isLoading = false;
    });
    
  }

  handlePageEvent(event: any) {
    this.currentPage = event.page;
    this.processData();
  }

  handleSortEvent(sortEvent: {value: Sorting}){
    this.selectedItem = sortEvent.value;
    this.sortField = this.selectedItem?.code.fieldName;
    this.sortDirection = this.selectedItem?.code.order;
    this.sortListings();
    console.log('jejjj');
  }
  
  sortListings(){

    this.currentPage = 0;
    this.processData();
  }

  sortFromHigh(){
    this.sortField = "price";
    this.sortDirection = Order.desc;
    this.currentPage = 0;
    this.processData();
  }
}
