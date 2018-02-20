
import { Injectable } from '@angular/core';

@Injectable()
export class FindStringService {
    constructor() {

    }

    doesContainString(stringTobeSearched: string, mainString: string) {
        if (mainString.toLowerCase().indexOf(stringTobeSearched.toLowerCase()) >= 0) {
            return true;
        }
        return false;
    }
}
