import "./../assets/styles/components.css";
import img404 from "./../assets/images/Scarecrow.png";

const Notfound404 = () => {
  return (
    <div className="notfound">
      <div className="row">
        <h4 className="title">404 NOT FOUND</h4>
      </div>
      <div className="row content">
        <div className="col-sm-12 col-md-6">
          <img src={img404} alt="" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h1>I have bad news for you</h1>
          <p className="col-7">
            The page you are looking for might be removed or is remporarily
            unavailable
          </p>
          <button>BACK TO HOME PAGE</button>
        </div>
      </div>

      <footer>
        <label htmlFor="">
          created by <strong>ovalencia</strong> - devChallenges.io
        </label>
      </footer>
    </div>
  );
};

Notfound404.propTypes = {};

export default Notfound404;
