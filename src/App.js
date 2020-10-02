import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

const App =  () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: title,
      bookAuthor: author,
      bookIsbn: isbn,
      bookId: uuidv4()
    }
  ])

  return (
    <div className="App">
      <h1>Welcome</h1>
    </div>
  );
};

export default App;
