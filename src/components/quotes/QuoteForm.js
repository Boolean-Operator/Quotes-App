import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const ratingInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const enteredRating = ratingInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({
      author: enteredAuthor,
      text: enteredText,
      rating: enteredRating,
    });
  }

  const formFocusHandler = () => {
    setIsEntering(true);
  };
  const finishedEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <>
      <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure? All the information you have entered will be lost.'
        }
      />
      <Card>
        <form
          onFocus={formFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              min="1"
              max="100"
              ref={ratingInputRef}
            />
          </div>
          <div className={classes.actions}>
            <button onClick={finishedEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
