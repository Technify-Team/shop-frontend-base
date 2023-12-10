import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  items: any;

    ngOnInit() {
      this.items = [
        {
            label: 'Our products',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Фрукти, овочі',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Фрукти',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Овочі',
                            icon: 'pi pi-fw pi-video'
                        }
                    ]
                },
                {
                  label: 'Мʼясо, риба',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {
                          label: 'Мʼясні консерви',
                          icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                          label: 'Рибні консерви',
                          icon: 'pi pi-fw pi-video'
                      },
                      {
                        label: 'Молочні продукти',
                        icon: 'pi pi-fw pi-video'
                      },
                  ]
                },
                {
                  label: 'Бакалія',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {
                          label: 'Борошно',
                          icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                          label: 'Крупи',
                          icon: 'pi pi-fw pi-video'
                      }
                  ]
                },
                {
                  label: 'Соуси, приправи',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {
                          label: 'Кетчуп',
                          icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                          label: 'Соус',
                          icon: 'pi pi-fw pi-video'
                      }
                  ]
                },

            ]
        },
        {
            label: 'Our story',
            icon: 'pi pi-fw pi-pencil',
        },
        {
            label: 'Contacts',
            icon: 'pi pi-fw pi-user',
            
        },
        {
            label: 'Sell ​​with us',
            icon: 'pi pi-fw pi-calendar',
        },
      ];
    }


    
}



 