import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <div className={classes.blockcaption}>
        <figcaption>Rating: {props.rating} / 100</figcaption>
        <figcaption>{props.author}</figcaption>
      </div>
    </figure>
  );
};

export default HighlightedQuote;
