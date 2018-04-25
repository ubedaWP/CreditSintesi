import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoticiesComponent } from './pages/noticies/noticies.component';
import { LoginComponent, DialogOverviewExampleDialog } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BotigaComponent } from './pages/botiga/botiga.component';
import { EventsComponent } from './pages/noticies/events/events.component';
import { PatchesComponent } from './pages/noticies/patches/patches.component';
import { EsportsComponent } from './pages/noticies/esports/esports.component';
import { MediaComponent } from './pages/media/media.component';
import { DataService } from './services/data-service.service';
import { PublicService } from './services/public.service';
import { DialogsService } from './services/dialogs.service';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TopNavbarComponent } from './pages/top-navbar/top-navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './pages/inici/inici.component';


import { MatButtonModule, MatCheckboxModule, MatSnackBarContainer, MatIconModule, MatCardModule, 
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule} from '@angular/material';
import { MatSnackBar, MatMenuModule, MatToolbarModule } from '@angular/material';
import { Overlay, ScrollStrategyOptions, ScrollDispatcher, ViewportRuler, OverlayContainer, OverlayPositionBuilder, OverlayConfig, OverlayKeyboardDispatcher, OverlayModule } from '@angular/cdk/overlay';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';


const appRoutes: Routes = [
  { path: 'news', component: NoticiesComponent },
  { path: 'shop', component: BotigaComponent},
  { path: 'media', component: MediaComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: IniciComponent}
];

const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    AppComponent,
    NoticiesComponent,
    LoginComponent,
    RegisterComponent,
    BotigaComponent,
    EventsComponent,
    PatchesComponent,
    EsportsComponent,
    MediaComponent,
    TopNavbarComponent,
    IniciComponent,
    MatSnackBarContainer
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCheckboxModule,
    OverlayModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    materialModules
    
  ],
  providers: [
    DataService,
    PublicService,
    DialogsService,
    HttpClient,
    MatSnackBar,
    Overlay,
    ScrollStrategyOptions,
    ScrollDispatcher,
    ViewportRuler,
    OverlayContainer,
    OverlayPositionBuilder,
    OverlayKeyboardDispatcher,
    BreakpointObserver,
    MediaMatcher,
    
  ],
  bootstrap: [AppComponent],
  entryComponents:[DialogOverviewExampleDialog]
})
export class AppModule { }
