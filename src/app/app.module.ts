import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MessagesService } from './messages.service';
import { PostsService } from './posts.service';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    JumbotronComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MessagesService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
