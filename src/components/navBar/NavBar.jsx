import { Link } from "react-router-dom";
import "./style.css";
function NavBar() {
  return (
    <div className="navBar">
      <Link className="btn btn-secondary" to="/">
        <i className="fas fa-home"></i> Home
      </Link>
      <span>Simple App</span>
      {/* <Link
        className="btn btn-success"
        style={{ margin: "0 0.2vw" }}
        to="/users"
      >
        Users
      </Link>
      <Link
        className="btn btn-secondary"
        style={{ margin: "0 0.2vw" }}
        to="/comments"
      >
        Comments
      </Link>
      <Link
        className="btn btn-danger"
        style={{ margin: "0 0.2vw" }}
        to="/images"
      >
        Images
      </Link> */}
    </div>
  );
}

export default NavBar;
