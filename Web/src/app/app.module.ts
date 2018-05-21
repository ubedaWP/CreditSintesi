//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, NgControl } from '@angular/forms';
import { MDBBootstrapModule, ModalModule, ModalDirective } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatSnackBarContainer, MatIconModule, MatCardModule, 
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MAT_LABEL_GLOBAL_OPTIONS,
  MatDatepicker,
  MatNativeDateModule,
  MatSelectModule,
  MatDatepickerModule} from '@angular/material';
import { MatSnackBar, MatMenuModule, MatToolbarModule } from '@angular/material';
import { Overlay, ScrollStrategyOptions, ScrollDispatcher, ViewportRuler, OverlayContainer, OverlayPositionBuilder, OverlayConfig, OverlayKeyboardDispatcher, OverlayModule } from '@angular/cdk/overlay';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';
import { SweetAlert2Module, SwalComponent } from '@toverux/ngx-sweetalert2';
import { FileUploadModule } from 'primeng/fileupload';

//SERVICES
import { DataService } from './services/data-service.service';
import { PublicService } from './services/public.service';
import { DialogsService } from './services/dialogs.service';
import { GetsService } from './services/gets.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { InsertsService } from './services/inserts.service';
import { ProductsService } from './services/products.service';
import { UploadService } from './services/upload-service.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { NoticiesComponent } from './pages/noticies/noticies.component';
import { RegisterComponent } from './pages/register/register.component';
import { BotigaComponent } from './pages/botiga/botiga.component';
import { MediaComponent } from './pages/media/media.component';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TopNavbarComponent } from './pages/top-navbar/top-navbar.component';
import { IniciComponent } from './pages/inici/inici.component';
import { ProducteComponent } from './pages/botiga/producte/producte.component';
import { NewsSingularComponent } from './pages/noticies/news-singular/news-singular.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AddNoticiaComponent } from './pages/noticies/add-noticia/add-noticia.component';
import { AddProductComponent } from './pages/botiga/add-product/add-product.component';


//PAGE ROUTES
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'news', component: NoticiesComponent },
  { path: 'shop', component: BotigaComponent},
  { path: 'media', component: MediaComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: IniciComponent},
  { path: 'product/:type/:id', component: ProducteComponent },
  { path: 'news/:id', component: NewsSingularComponent },
  { path: 'addNew', component: AddNoticiaComponent },
  { path: 'addNewProducte', component: AddProductComponent },
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
  MatTooltipModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  FileUploadModule
];


//IMPORTATIONS
@NgModule({
  declarations: [
    AppComponent,
    NoticiesComponent,
    RegisterComponent,
    BotigaComponent,
    MediaComponent,
    TopNavbarComponent,
    IniciComponent,
    MatSnackBarContainer,
    ProducteComponent,
    NewsSingularComponent,
    FooterComponent,
    AddNoticiaComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ModalModule,
    OverlayModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    materialModules,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  }),
  ],
  providers: [
    DataService,
    PublicService,
    DialogsService,
    CookieService,
    InsertsService,
    ProductsService,
    UploadService,
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
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'auto'}},
    GetsService,
    FormBuilder,
    SwalComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
