import {Component, computed, Input, signal} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatExpansionModule, MatExpansionPanel} from "@angular/material/expansion";

export type BlobalMenu = {
  icon: string;
  label: string;
  route: string;
  items: [];
}

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    MatExpansionModule
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false)

  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val)
  }

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32':'100')

  menuItems = signal<MenuItem[]>([
        {
          icon: 'dashboard',
          label: 'БКО',
          route: 'tp-order',
        },
        {
          icon: 'attach_file',
          label: 'Мурожаатлар',
          route: 'tp-appeals',
        },
        {
          icon: 'pie_chart',
          label: 'Хисоботлар',
          route: 'tp-report',
        },
        {
          icon: 'local_offer',
          label: 'Маълумотнома',
          route: 'tp-catalog',
        },
  ])
}
