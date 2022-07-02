import hal from '../assets/hal.png';
import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div id="main" className="centered hal">
      <div>
        <p>Error 404</p>
        <img src={hal} alt="HAL 9000 error" />
        <h1>I'm sorry Dave.</h1>
      </div>
      <div className={classes.fof}>
        <h1>I'm afraid I can't do that.</h1>
      </div>
    </div>
  );
};

export default NotFound;
