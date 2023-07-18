import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDLphVCpI0yph5qRf5XiZoZApfyhacrEQo",
      authDomain: "fir-angular-auth-2b3a7.firebaseapp.com",
      projectId: "fir-angular-auth-2b3a7",
      storageBucket: "fir-angular-auth-2b3a7.appspot.com",
      messagingSenderId: "457976212866",
      appId: "1:457976212866:web:89578ed55c44562d0cb39b"
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
