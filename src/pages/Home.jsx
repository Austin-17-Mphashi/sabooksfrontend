import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BookContext from "./Context/BooksContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Home.css";

const Home = () => {
  const { bookList } = useContext(BookContext);

  const [images, setImages] = useState([
    "https://picsum.photos/200/200",
    "https://picsum.photos/300/300",
    "https://picsum.photos/100/100",
    "https://picsum.photos/400/400",
    "https://picsum.photos/500/500",
    "https://picsum.photos/600/600",
    "https://picsum.photos/700/700",
  ]);

  const [topRatedBooks, setTopRatedBooks] = useState([]);

  useEffect(() => {
    // Sort the books by rating in descending order
    const sortedBooks = bookList.sort((a, b) => b.rating - a.rating);

    // Set the top 10 rated books
    setTopRatedBooks(sortedBooks.slice(0, 10));

    const timer = setInterval(() => {
      const shuffledImages = shuffleArray(images);
      setImages(shuffledImages);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [bookList, images]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div>
      <div className="landing-page">
        <div className="landing-page-text">
          <h1>Welcome to the Landing Page</h1>
          <p>This is the description of the landing page</p>
          <button>Get Started</button>
        </div>
      </div>

      <Carousel
        className="carousel"
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={6000}
      >
        {images.map((imageUrl, index) => (
          <div key={index} className="images-container">
            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
      
      <div className="top-rated">
        <h2>Top Rated Books</h2>
        <div className="books">
          {topRatedBooks.map((book, index) => (
            <Link
              key={index}
              to={`/library/${book.book_id}`}
              state={{ data: book }}
              style={{ textDecoration: "none", color: "inherit" }}
              className="library-book"
            >
              <div>
                <img src={book.image} alt="..." />
              </div>
              <div className="book-content">
                <small className="text-primary">{book.title}</small>
                <br />
                <small>{book.author}</small>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
