import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#65B741" }}>
      <div className="container-fluid">
        <div className="row">
          <div style={{ textAlign: 'center' }} tabIndex="0">
            © 2024. Content available on website is owned and maintained by
            Rural Development &amp; Panchayat Raj Department, Government of
            Maharashtra, India.
          </div>
        </div>
        <p style={{ textAlign: 'center' }} className="focus-link" tabIndex="0">
          Last Update : 03-Jun-2024 4:29 pm | Visitor Counter : 17357940 |
          Today's Visitor Counter: 3365
        </p>
      </div>
    </footer>
  );
}

export default Footer;
