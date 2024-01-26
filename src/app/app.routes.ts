import { Routes } from '@angular/router';
import {TpCatalogComponent} from "./modules/tp/tp-catalog/tp-catalog.component";
import {TpOrderComponent} from "./modules/tp/tp-order/tp-order.component";
import {TpAppealsComponent} from "./modules/tp/tp-appeals/tp-appeals.component";
import {TpReportComponent} from "./modules/tp/tp-report/tp-report.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tp-order'
  },
  {
    path: 'tp-order',
    component: TpOrderComponent
  },
  {
    path: 'tp-appeals',
    component: TpAppealsComponent
  },
  {
    path: 'tp-report',
    component: TpReportComponent
  },
  {
    path: 'tp-catalog',
    component: TpCatalogComponent
  },
];

