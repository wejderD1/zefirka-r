import { Link } from "react-router-dom/cjs/react-router-dom";

function Page404 () {
  return (
    <div className="page_404_wrapper">
      <div className="page_404_inner">
        <img src="" alt="error"/>
        <Link to="/" className="main-text">główna strona</Link>
      </div>
    </div>
  );
}

export default Page404 ;