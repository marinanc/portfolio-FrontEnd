export class Education {
    id?: number;
    title: string;
    dateFrom: string;
    dateTo: string;
    description: string;
    img: string;

    constructor(title: string, dateFrom: string, dateTo: string, description: string, img: string){
        this.title = title;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.description = description;
        this.img = img;
    }
}
