export class Education {
    id?: number;
    title: string;
    dateFrom: string;
    dateTo: string;
    description: string;

    constructor(title: string, dateFrom: string, dateTo: string, description: string){
        this.title = title;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.description = description;
    }
}
