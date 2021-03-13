import {Song} from "./song";
import {Album} from "./album";

console.log("hello world");

var songs:Song[];
var s1=new Song("Smells like teen spirit", "Nirvana", "5:01", 1991);
var s2=new Song("In Bloom","Nirvana","4:41",1991);
var s3=new Song("Breed","Nirvana","3:03",1991);
var album=new Album(songs);
album.addSong(s1);
album.addSong(s2);
album.addSong(s3);
album.showAlbum();
