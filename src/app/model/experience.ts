export class Experience {
    id?: number;
    name: string;
    dateFrom: string;
    dateTo: string;
    description: string;

    constructor(name: string, dateFrom: string, dateTo: string, description: string){
        this.name = name;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.description = description;
    }
}
