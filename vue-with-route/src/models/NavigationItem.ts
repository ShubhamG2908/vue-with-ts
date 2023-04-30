export class NavigationItem {
    constructor(id:number,name:string,href:string,icon:string)
    {
        this.id = id;
        this.name = name;
        this.href = href;
        this.icon = icon;
    }

    id!: number;
    name!: string;
    href!: string;
    icon!: string;
}