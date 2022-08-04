import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'listing',
        loadChildren: () => import('../screens/listing/listing.module').then( m => m.ListingPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../screens/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'useraccount',
        loadChildren: () => import('../useraccount/useraccount.module').then( m => m.UseraccountPageModule)
      },
      {
        path: 'location-details',
        loadChildren: () => import('../location-details/location-details.module').then( m => m.LocationDetailsPageModule)
      },
      {
        path: '',
        redirectTo:'listing',
        pathMatch:'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
