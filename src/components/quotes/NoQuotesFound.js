import hal from '../../assets/hal.png';
import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div id="main" className="centered hal">
      <div>
        <p>No quotes were found.</p>
        <img src={hal} alt="HAL 9000 error" />
        <h1>I'm sorry Dave, but this can only</h1>
      </div>
      <div className={classes.fof}>
        <h1>be attributable to human error.</h1>
      </div>
    </div>
  );
};

export default NoQuotesFound;
