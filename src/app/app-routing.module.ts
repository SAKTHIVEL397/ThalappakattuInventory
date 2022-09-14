import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },  
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'vendor',
    loadChildren: () => import('./vendor/vendor.module').then( m => m.VendorPageModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'all-order',
    loadChildren: () => import('./all-order/all-order.module').then( m => m.AllOrderPageModule)
  },
  {
    path: 'category-order',
    loadChildren: () => import('./category-order/category-order.module').then( m => m.CategoryOrderPageModule)
  },
  {
    path: 'list-order',
    loadChildren: () => import('./list-order/list-order.module').then( m => m.ListOrderPageModule)
  },
  {
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then( m => m.InventoryPageModule)
  },
  {
    path: 'order-products',
    loadChildren: () => import('./order-products/order-products.module').then( m => m.OrderProductsPageModule)
  },
  {
    path: 'place-order',
    loadChildren: () => import('./place-order/place-order.module').then( m => m.PlaceOrderPageModule)
  },
  {
    path: 'order-history',
    loadChildren: () => import('./order-history/order-history.module').then( m => m.OrderHistoryPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-staff',
    loadChildren: () => import('./add-staff/add-staff.module').then( m => m.AddStaffPageModule)
  },
  {
    path: 'add-vendor',
    loadChildren: () => import('./add-vendor/add-vendor.module').then( m => m.AddVendorPageModule)
  },
  {
    path: 'sub-category',
    loadChildren: () => import('./sub-category/sub-category.module').then( m => m.SubCategoryPageModule)
  },
  {
    path: 'add-category',
    loadChildren: () => import('./add-category/add-category.module').then( m => m.AddCategoryPageModule)
  },
  {
    path: 'add-sub-category',
    loadChildren: () => import('./add-sub-category/add-sub-category.module').then( m => m.AddSubCategoryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
