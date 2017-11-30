import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//all the angular material modules
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
  MatButtonModule,
  MatToolbarModule,  
  MatSidenavModule, 
  MatListModule,
  MatCheckboxModule,
  MatSlideToggleModule, 
  MatSliderModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { ChatFormComponent } from './chat-form/chat-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    ChatFormComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
