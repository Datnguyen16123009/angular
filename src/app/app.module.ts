import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GioHangComponent } from './gio-hang/gio-hang.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShopCardComponent,
    GioHangComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastModule,
    MessagesModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent, ProductListComponent],
})
export class AppModule {}
