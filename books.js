// pages/api/books.js
export default function handler(req, res) {
    const books = [
      { id: 1, title: 'Book 1', author: 'Author 1' },
      { id: 2, title: 'Book 2', author: 'Author 2' },
      { id: 3, title: 'Book 3', author: 'Author 3' },
      { id: 4, title: 'Book 4', author: 'Author 4' },
      { id: 5, title: 'Book 5', author: 'Author 5' },
      { id: 6, title: 'Book 6', author: 'Author 6' },
      { id: 7, title: 'Book 7', author: 'Author 7' },
      { id: 8, title: 'Book 8', author: 'Author 8' },
      { id: 9, title: 'Book 9', author: 'Author 9' },
      { id: 10, title:'Book 10', author: 'Author 10' },
      { id: 10, title:'Book 10', author: 'Author 10' },
      { id: 10, title:'Book 10', author: 'Author 10' },
      { id: 10, title:'Book 10', author: 'Author 10' },
      { id: 10, title:'Book 10', author: 'Author 10' },
      { id: 10, title:'Book 10', author: 'Author 10' },
      { id: 10, title:'Book 10', author: 'Author 10' },
      { id: 10, title:'Book 10', author: 'Author 10' },
      { id: 10, title:'Book 10', author: 'Author 10' },
      
    ];
  
    res.status(200).json(books); // Respond with the list of books in JSON format
  }
  