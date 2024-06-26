import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CanEnterTabsPageGuard } from '../can-enter-tabs-page.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [CanEnterTabsPageGuard],
    children: [
      {
        path: 'tab1',
        children:
        [
        {
          path: '',
          loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
        },{
          path: 'activity-detail/:activityID',
          loadChildren: () => import('../activity-detail/activity-detail.module').then( m => m.ActivityDetailPageModule)
        }
        
        ]
        
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
      
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
