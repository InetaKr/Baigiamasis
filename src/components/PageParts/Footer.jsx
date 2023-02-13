const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-first-section">
            <div className="footer-text">
              <p>
                You Love Animals...WE Love Animals..Everyone here Loves Animals. <br />{" "}
                If you Love your Pets you came to the right place. <br />
                Let's share our Love for Pets Together !
              </p>
            </div>
            <div className="footer-social-icon">
              <span>Follow us</span>
              <a href="#">
                <i className="fa fa-facebook-f facebook-bg"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter twitter-bg"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus google-bg"></i>
              </a>
            </div>
          </div>
          <div className="footer-second-section">
            <div className="company-info">
              <i className="fa fa-map-marker company-info-icon"></i>
              <div className="company-info-text">
                <h4>Find us</h4>
                <span>1010 MeowAvenue, sw 12334, Pawcity</span>
              </div>
            </div>
            <div className="company-info">
              <i className="fa fa-phone company-info-icon"></i>
              <div className="company-info-text">
                <h4>Call us</h4>
                <span>+37068123123</span>
              </div>
            </div>
            <div className="company-info">
              <i className="fa fa-envelope-open company-info-icon"></i>
              <div className="company-info-text">
                <h4>Mail Us</h4>
                <span>Pawzly@info.com</span>
              </div>
            </div>
          </div>
          <div className="footer-third-section">
            <div className="footer-heading">
              <h3>Subscribe</h3>
            </div>
            <div className="footer-text">
              <p>
                Don't miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
            </div>
            <form action="#" className="subscribe-form">
              <input type="email" placeholder="Email Address" />
              <button>
                <i className="fa fa-send" />
              </button>
            </form>
          </div>
        </div>
        <div className="copyright-text">
          <p>Copyright &copy; 2018, All Right Reserved CatLovers</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
