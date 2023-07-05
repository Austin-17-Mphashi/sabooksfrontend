import React, { useState } from 'react';
import BookContext from './BooksContext';
import books from '../Books';

const BookProvider = (props) => {
  const [bookList, setBookList] = useState(books);

  return (
    <BookContext.Provider value={{ bookList }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
