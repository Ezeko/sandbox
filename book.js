export class Book {
//declare constructor
    constructor(title,author,description,pages,currentPage,read = false){
      this.title = title;
      this.author = author;
      this.description = description;
      this.pages = pages;
      this.currentPage = currentPage;
      this.read = read;
    }
    
//method
     readBook(page){
       if(page < 1 || page> this.pages){
         return false;
       }else if(page >=1 && page < this.pages){
         this.currentPage = page;
         return true;
       }else if(page == this.pages){
         this.currentPage = page;
         this.read = true;
         return true;
       }
     }
}

//instantiate books
const foodBook = new Book('food is good', 'Ezekiel ADEJOBI', 'The great book that describes good foods', 20);

const codeBook = new Book('code is life', 'Emma Adebayo', 'The great book that talks about good coding habits', 200);

const loveBook = new Book('Love is sweet', 'Aman AlHasan', 'The  book that describes love', 120);

//export books

export const books = [foodBook, codeBook, loveBook];
