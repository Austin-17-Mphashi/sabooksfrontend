import React from "react";
import books from "./Books";
import { Link } from "react-router-dom";

function Library() {
  return (
    <div className="library-books-filter-container my-5">
      <div className="categories-filter-container my-3">
        <div>
          <div className="top-categories-buttons my-3">
            <div className="library-announcement my-4"></div>
            <h6>Top Categories</h6>
            <button className="btn m-1 btn-secondary text-light">
              fiction
            </button>
            <button className="btn m-1 btn-secondary text-light">
              fiction
            </button>
            <button className="btn m-1 btn-secondary text-light">
              fiction
            </button>
            <button className="btn m-1 btn-secondary text-light">
              fiction
            </button>
            <button className="btn m-1 btn-secondary text-light">
              fiction
            </button>
            <button className="btn m-1 btn-secondary text-light">
              fiction
            </button>
            <button className="btn m-1 btn-secondary text-light">
              fiction
            </button>
            <button className="btn m-1 btn-secondary text-light">
              fiction
            </button>
            <button className="btn m-1 btn-secondary text-light">
              fiction
            </button>
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
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
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
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="books-wrapper">
        {books.map((book, index) => (
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
