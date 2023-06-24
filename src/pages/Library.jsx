import React, { useState } from "react";
import books from "./Books";
import { Link } from "react-router-dom";

function Library() {
  const renderedCategories = [];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const topCategories = books.slice(0, 5).reduce((acc, book) => {
    if (!acc.includes(book.category)) {
      acc.push(book.category);
    }
    return acc;
  }, []);

  const handleSelectAllCategories = () => {
    if (selectedCategories.length === renderedCategories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(renderedCategories);
    }
  };
  const handleCategoryChange = (category) => {
    // Check if the category is already selected
    if (selectedCategories.includes(category)) {
      // If selected, remove the category from the selectedCategories array
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      // If not selected, add the category to the selectedCategories array
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  const handleCategoryClicked = (category) => {
    setSelectedCategories(category);
  };
  const filteredBooks =
    selectedCategories.length > 0
      ? books.filter((book) => selectedCategories.includes(book.category))
      : books;

      const getCategoryCount = (category) => {
        return books.filter((book) => book.category === category).length;
      };
  return (
    <div className="library-books-filter-container my-5">
      <div className="categories-filter-container my-3">
        <div>
          <div className="top-categories-buttons my-3">
            <div className="library-announcement my-4"></div>
            <h6>Top Categories</h6>
            {topCategories.map((category, index) => (
              <button
                className="btn m-1 btn-secondary text-light"
                key={index}
                onClick={() => handleCategoryClicked(category)}
              >
                {category} ({getCategoryCount(category)})
              </button>
            ))}
          </div>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
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
          <div class="accordion-item">
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
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="selectAllCheckbox"
                    checked={
                      selectedCategories.length === renderedCategories.length
                    }
                    onChange={handleSelectAllCategories}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="selectAllCheckbox"
                  >
                    Select All
                  </label>
                </div>
                {books.map((book, index) => {
                  if (!renderedCategories.includes(book.category)) {
                    renderedCategories.push(book.category);
                    return (
                      <div className="form-check" key={index}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id={`defaultCheck${index}`}
                          onChange={() => handleCategoryChange(book.category)}
                        />
                        <label
                          className="form-check-label"
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

      <div className="books-wrapper">
        {filteredBooks.map((book, index) => (
          <Link
            key={index}
            to={`${book.title}`}
            state={{ data: book }}
            style={{ textDecoration: "none", color: "inherit" }}
            className="book-container"
          >
            <div className="book-image-wrapper">
              <img src={book.image} alt="..." />
            </div>
            <div className="book-content-wrapper">
              <p className="p-0 m-0">{book.title}</p>
              <small className="p-0 m-0">{book.author}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Library;
