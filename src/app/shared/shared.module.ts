import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent,
    FooterComponent,
    SideBarComponent,
    SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, FooterComponent,SideBarComponent,SearchComponent],
})
export class SharedModule { }
