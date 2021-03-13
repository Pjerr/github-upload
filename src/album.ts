import {Song} from "./song"
export class Album{
    constructor(private songs:Song[])
    {
        this.songs=[];
    }

    showAlbum()
    {
        console.log(this.songs);
    }

    addSong(s:Song)
    {
        this.songs.push(s);
    }

    removeSong(s:Song)
    {
        this.songs=this.songs.filter(obj=> obj !== s);
    }
}