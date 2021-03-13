export class Song
{
    constructor(private title:string, private author:string,private lenght:string, private year:number)
    {
        this.title=title;
        this.author=author;
        this.year=year;
    }

    showInfo()
    {
        console.log(`Title: ${this.title}, author: ${this.author}, score: ${this.year}, lenght: ${this.lenght}`);
    }
} 