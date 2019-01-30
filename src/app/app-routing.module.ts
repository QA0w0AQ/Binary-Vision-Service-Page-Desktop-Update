import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArvinComponent } from './arvin/arvin.component';
import { BeteazeComponent } from './beteaze/beteaze.component';
import { MainComponent } from './main/main.component';
import { KoffeeRunComponent } from './koffee-run/koffee-run.component';
import { LooperComponent } from './looper/looper.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/service',
      pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'looper', component: LooperComponent },
    { path: 'beteaze', component: BeteazeComponent },
    { path: 'arvin', component: ArvinComponent },
    { path: 'koffee', component: KoffeeRunComponent },
    { path: 'service', component: MainComponent },
    // { path: '**', component: HomeComponent }
  ], {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
