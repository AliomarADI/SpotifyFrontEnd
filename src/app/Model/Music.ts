export class Music{
  id: number;
  name: string;
  author: string;
  genre: string;


  constructor(id: number, name: string, author: string, genre: string) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.genre = genre;
  }
}
