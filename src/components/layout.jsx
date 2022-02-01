import { motion } from 'framer-motion';
import imgLayout from '../images/shibexDesktop.png';
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
            style={{ width: '100vw', height: '101vh' }}
          />
          <div className="carousel-caption layout-caption">
            <p className="display-6 fw-bolder text-capitalize">
              An ecosystem of arcade game based on play to burn modele.
            </p>
          </div>
          <motion.div
            className="btn-caption button-layout"
            initial={{ opacity: '0', scale: 0 }}
            animate={{
              opacity: '1',
              transition: { duration: '1' },
              rotate: 360,
              scale: 1,
            }}
            transition={{
              delay: 2,
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <a
              href="https://shibex-soldiers.web.app/"
              className=" btn-slider btn btn-dark rounded-pill innerBtns btn-lg"
              target="_blank"
              rel="noreferrer"
            >
              Let's Play
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
