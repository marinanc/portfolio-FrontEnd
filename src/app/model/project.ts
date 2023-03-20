export class Project {
    id?: number;
    name: string;
    description: string;
    link: string;

    constructor(name: string, description: string, link: string) {
        this.name = name;
        this.description = description;
        this.link = link;
    }
}
