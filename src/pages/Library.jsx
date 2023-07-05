import React, { useState,useContext } from "react";
import BookContext from "./Context/BooksContext";
//import books from "./Books";
import { Link } from "react-router-dom";

function Library() {
  const { bookList } = useContext(BookContext);

  console.log(bookList)
  let books = bookList
  const renderedCategories = [];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const topCategories = books?.slice(0, 5).reduce((acc, book) => {
    if (!acc.includes(book.category)) {
      acc.push(book.category);
    }
    return acc;
  }, []);

  const handleSelectAllCategories = () => {
    if (selectedCategories?.length === renderedCategories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(renderedCategories);
    }
  };
  const handleCategoryChange = (category) => {
    
    if (selectedCategories?.includes(category)) {
      
      setSelectedCategories(
        selectedCategories?.filter((cat) => cat !== category)
      );
    } else {
      
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const handleCategoryClicked = (category) => {
    setSelectedCategories(category);
  };
  const filteredBooks =
    selectedCategories.length > 0
      ? books?.filter((book) => selectedCategories?.includes(book.category))
      : books;

      const getCategoryCount = (category) => {
        return books?.filter((book) => book.category === category).length;
      };
  return (
    <div className=" my-5 library-container">
      <div className="library-filter-container" >
        <div >
          <div className="notice-img">
          </div>
          <div className="my-2">
            <h6>Top Categories</h6>
            {topCategories?.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClicked(category)}
                className="btn btn-outline-primary m-1"
              >
                {category} <span className="text-danger">{getCategoryCount(category)}</span>
              </button>
            ))}
          </div>
        </div>
        <div class="my-2 accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Sort
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Most viewed
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Recommended
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Top Rated
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Editors choice
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item my-2">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Categories
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <div className="form-check" key="selectAll">
                  <input
                    
                    type="checkbox"
                    value=""
                    id="selectAllCheckbox"
                    checked={
                      selectedCategories.length === renderedCategories.length
                    }
                    onChange={handleSelectAllCategories}
                  />
                  <label
                    
                    htmlFor="selectAllCheckbox"
                  >
                    Select All
                  </label>
                </div>
                {books?.map((book, index) => {
                  if (!renderedCategories.includes(book.category)) {
                    renderedCategories.push(book.category);
                    return (
                      <div  key={index}>
                        <input
                         
                          type="checkbox"
                          value=""
                          id={`defaultCheck${index}`}
                          onChange={() => handleCategoryChange(book.category)}
                        />
                        <label
                          
                          htmlFor={`defaultCheck${index}`}
                        >
                          {book.category} ({getCategoryCount(book.category)})
                        </label>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="library-books-container">
        {filteredBooks?.map((book, index) => (
          <Link
            key={index}
            to={`${book.book_id}`}
            state={{ data: book }}
            style={{ textDecoration: "none", color: "inherit" }}
            className="library-book"
          >
            <div>
              <img src={book.image} alt="..." />
            </div>
            <div className="book-content">
              <small className="text-primary">{book.title}</small>
              <br/>
              <small>{book.author}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Library;
