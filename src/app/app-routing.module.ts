import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from 'src/app/pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes:Routes =[
    {
        path:'',
        component:PorPaisComponent,
        pathMatch:'full'
    },
    {
        path:'region',
        component:PorRegionComponent,
        pathMatch:'full'
    },
    {
        path:'capital',
        component:PorCapitalComponent
    },
    {
        path:'pais/:id',
        component:VerPaisComponent
    },
    {
        path:'**',
        redirectTo:''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})


export class AppRoutingModule {

}