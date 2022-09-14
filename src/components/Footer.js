import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Footer = () => {
  return (
    <>
      <footer className="page-footer ">
        <div className="footer-copyright text-center py-3">
          © 2022 Copyright FlockStudio
        </div>
      </footer>
    </>
  );
};

export default Footer;
