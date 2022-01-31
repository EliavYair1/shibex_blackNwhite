import imgLayout from '../images/shibexMain3.png';
import './css_files/layout.css';
const Layout = () => {
  return (
    <div className="container-fluid layoutContainer">
      <div className="row ">
        <div className="col-12">
          <img
            src={imgLayout}
            alt="layoutImg"
            className="img-fluid"
            style={{ width: '100vw', height: '120vh' }}
          />
          <div className="carousel-caption layout-caption">
            <p className="display-6 fw-bolder text-capitalize captionPara ecosystem ">
              An ecosystem of arcade game based on play to burn modele.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
