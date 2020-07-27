import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';



@NgModule({
  declarations: [PageComponent, HeaderComponent, MenuComponent, FooterComponent, HeroComponent, FeaturesComponent],
  imports: [
    CommonModule
  ],
  exports: [PageComponent]
})
export class LandingPageModule { }
