import { NgModule } from '@angular/core';
import { CountryService } from '../country.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { OnlyDigitsDirective } from './../directives/only-digits.directive';
import { TitleCasePipe } from '../pipes/title-case-pipe';
import { ReversePipe } from '../pipes/reverse.pipe';
import { FindStringService } from '../string-search.service';



@NgModule({
    declarations: [
        OnlyDigitsDirective,
        TitleCasePipe,
        ReversePipe
    ],
    imports: [
        HttpModule,
        HttpClientModule
    ],
    exports: [
        OnlyDigitsDirective,
        TitleCasePipe,
        ReversePipe
    ],
    providers: [CountryService, DataService, FindStringService]
})
export class SharedModule { }
