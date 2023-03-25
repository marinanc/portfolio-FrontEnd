export class Experience {
    id?: number;
    name: string;
    dateFrom: string;
    dateTo: string;
    description: string;
    img: string;

    constructor(name: string, dateFrom: string, dateTo: string, description: string, img: string){
        this.name = name;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.description = description;
        this.img = img;
    }
}
