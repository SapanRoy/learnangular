

export class CricWorld {
    countries: Country[];
}
export class Country {
    ID: number;
    Name: string;
    Teams: Team[];
}

export class Team {
    ID: number;
    Name: string;
    CountryID: number;
    CountryName: string;
    IsEditing = false;
}
