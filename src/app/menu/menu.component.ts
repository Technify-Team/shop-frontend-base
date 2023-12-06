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
                label: 'Парфумерія',
                icon: 'pi pi-fw pi-video',
                items: [
                    [
                        {
                            label: 'Атомайзери'
                        },
                        {
                            label: 'Аромати для дому',
                        },
                        {
                          label: 'Аромалампа',
                        },
                        {
                          label: 'Ароматизатори',
                        },
                        {
                          label: 'Ароматичні палички',
                        },
                        {
                          label: 'Ароматичні свічки',
                        },
                        {
                          label: 'Парфумовані свічки',
                        }
                    ],
                    [
                      {
                          label: 'Атомайзери'
                      },
                      {
                          label: 'Аромати для дому',
                      },
                      {
                        label: 'Аромалампа',
                      },
                      {
                        label: 'Ароматизатори',
                      },
                      {
                        label: 'Ароматичні палички',
                      },
                      {
                        label: 'Ароматичні свічки',
                      },
                      {
                        label: 'Парфумовані свічки',
                      }
                  ],
                  [
                    {
                        label: 'Атомайзери'
                    },
                    {
                        label: 'Аромати для дому',
                    },
                    {
                      label: 'Аромалампа',
                    },
                    {
                      label: 'Ароматизатори',
                    },
                    {
                      label: 'Ароматичні палички',
                    },
                    {
                      label: 'Ароматичні свічки',
                    },
                    {
                      label: 'Парфумовані свічки',
                    }
                ],
                [
                  {
                      label: 'Атомайзери'
                  },
                  {
                      label: 'Аромати для дому',
                  },
                  {
                    label: 'Аромалампа',
                  },
                  {
                    label: 'Ароматизатори',
                  },
                  {
                    label: 'Ароматичні палички',
                  },
                  {
                    label: 'Ароматичні свічки',
                  },
                  {
                    label: 'Парфумовані свічки',
                  }
              ],
                ]
            },
            {
              label: 'Макіяж',
              icon: 'pi pi-fw pi-video',
              items: [
                [
                    {
                        label: 'Атомайзери'
                    },
                    {
                        label: 'Аромати для дому',
                    },
                    {
                      label: 'Аромалампа',
                    },
                    {
                      label: 'Ароматизатори',
                    },
                    {
                      label: 'Ароматичні палички',
                    },
                    {
                      label: 'Ароматичні свічки',
                    },
                    {
                      label: 'Парфумовані свічки',
                    }
                ],
                [
                  {
                      label: 'Атомайзери'
                  },
                  {
                      label: 'Аромати для дому',
                  },
                  {
                    label: 'Аромалампа',
                  },
                  {
                    label: 'Ароматизатори',
                  },
                  {
                    label: 'Ароматичні палички',
                  },
                  {
                    label: 'Ароматичні свічки',
                  },
                  {
                    label: 'Парфумовані свічки',
                  }
              ],
              [
                {
                    label: 'Атомайзери'
                },
                {
                    label: 'Аромати для дому',
                },
                {
                  label: 'Аромалампа',
                },
                {
                  label: 'Ароматизатори',
                },
                {
                  label: 'Ароматичні палички',
                },
                {
                  label: 'Ароматичні свічки',
                },
                {
                  label: 'Парфумовані свічки',
                }
            ],
            [
              {
                  label: 'Атомайзери'
              },
              {
                  label: 'Аромати для дому',
              },
              {
                label: 'Аромалампа',
              },
              {
                label: 'Ароматизатори',
              },
              {
                label: 'Ароматичні палички',
              },
              {
                label: 'Ароматичні свічки',
              },
              {
                label: 'Парфумовані свічки',
              }
          ],
            ]
            },
          ]
        

    };

  }    