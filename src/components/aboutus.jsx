import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MarqueeComponent from "./MarqueeComponent";
function AboutUs() {
  return (
    <Container className="about-section mt-5">
      <MarqueeComponent />
      <h2 className="text-center">About Us</h2>
      
        <h3> Zilla Parishad </h3>
        <br />
        <h5>73rd Amendment of Constitution.</h5>
      <p>
        As per the Directives of the Panchayat Raj Law, The constitution was
        amended for the 73rd time on 20thApril, 1993. According to Article
        243(J), the Panchayat Raj Sansthan has been given the authority to levy
        taxes & recover the same for economic development and social justice.
        The 73rd amendment act gave a constitutional status to the Panchayat Raj
        along with the Gram Sabha. According, the number of members of the Gram
        Sabha will depend on the local population. The amendment does away with
        the nomination & associate membership methods of choosing its members.
        It promotes ballot voting on the basis of adult franchise.
      </p>

      <h3 className="text-center">Location</h3>
      <div>
        <iframe
        title="location of zp "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1033.2383359972746!2d73.78218110019144!3d19.997295145147913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0887c6d8c9%3A0x2f841263dcca6464!2sZilla%20Parishad%20Nashik!5e0!3m2!1sen!2sin!4v1717674223683!5m2!1sen!2sin"
          width="100%"
          height="550"
          style={{ border: "0" }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="text-center">
        {" "}
        Zilla Parishad Rd, Trimbak Naka, Mohan Nagar, Nashik, Maharashtra 422001
      </p>

      <Container className="faculty mt-5">
        <h2 className="text-center">OFFICIALS  </h2>
        <Row>
          <Col md={6}>
            <div className="card">
              <div className="card-body text-center">
                <img
                  src="ZPCEO.jpeg"
                  alt="Steve"
                  style={{
                    width: "245px",
                    height: "250px",
                    display: "block",
                    margin: "auto",
                    borderRadius: "50%",
                  }}
                />
                <h3 className="mt-3"> CEO </h3>
                <p>
                  She was born on the 30th of June 1992 and is
                  currently 28 years of age. Her posting is currently in
                  Maharashtra. She hails from the capital city of Rajasthan,
                  Jaipur. Ashima has attended IIT Mumbai to do her Engineering
                  and had also taken up a job before attempting the UPSC exam.
                  Read on to learn more about her IAS.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="card">
              <div className="card-body text-center">
                <img
                  src="sp.png"
                  alt="Mark"
                  style={{
                    width: "245px",
                    height: "250px",
                    display: "block",
                    margin: "auto",
                    borderRadius: "50%",
                  }}
                />
                <h3 className="mt-3"> DGP  </h3>
                <p>
                  Sir is IPS, PPMG is an Indian Police
                  Service officer. He serves as the Additional Director General
                  of Police in the Anti-corruption Bureau, Maharashtra.
                  Previously he was Joint Commissioner of Police, Mumbai.
                  Formerly he was Commissioner of Police, Nashik city.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AboutUs;
