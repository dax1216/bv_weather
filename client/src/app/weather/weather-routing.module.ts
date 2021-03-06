import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { WeatherComponent } from './weather.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'weather', component: WeatherComponent, data: { title: extract('Current Weather') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WeatherRoutingModule {}
