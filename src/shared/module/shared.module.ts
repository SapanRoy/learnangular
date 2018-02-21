import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { OnlyDigitsDirective } from './../directives/only-digits.directive';
import { TitleCasePipe } from '../pipes/title-case-pipe';
import { ReversePipe } from '../pipes/reverse.pipe';

import { FindStringService } from '../service/string-search.service';
import { DataService } from './../service/data.service';
import { CountryService } from './../service/country.service';

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
