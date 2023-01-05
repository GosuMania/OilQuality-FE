import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OilQualityComponent} from "./pages/oil-quality/oil-quality.component";

const routes: Routes = [
    {
        path: '',
        component: OilQualityComponent,
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
