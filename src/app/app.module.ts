import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import {RouterModule, Routes} from '@angular/router';
import {CustomMaterialModule} from './core/material.module';
import { ThirdComponent } from './third/third.component';
import { ForthComponent } from './forth/forth.component';
import { FifthComponent } from './fifth/fifth.component';


const appRoutes: Routes = [
  { path: '', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'first', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'second', component: SecondComponent, data: { title: 'Second Component' } },
  { path: 'third', component: ThirdComponent, data: { title: 'Third Component' } },
  { path: 'forth', component: ForthComponent, data: { title: 'Forth Component' } },
  { path: 'fifth', component: FifthComponent, data: { title: 'Fifth Component' } }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SecondComponent,
    FirstComponent,
    ThirdComponent,
    ForthComponent,
    FifthComponent
  ],
  imports: [
    BrowserModule,
    UiSwitchModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
