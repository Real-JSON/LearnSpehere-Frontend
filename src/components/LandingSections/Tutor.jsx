import React from "react";
import tutorImg from "../../assets/images/backgrounds/bg-1.png";
// import "../styles/Tutor.css";

const Tutor = () => {
  return (
    <>
      <div className="tutor-container" id="tutor">
        <section>
          <div className="tutor-area">
            <div className="tutor-content">
              <div className="info-text">
                <h3>
                  if you are a certified teacher then{" "}
                  <span>become an instructor</span>
                </h3>
                <p>
                  Share your expertise with thousands of eager students worldwide. Join our global network of educators, build your personal brand, and earn income doing what you love with our powerful teaching tools.
                </p>
              </div>
              <div className="tutor-benefits">
                <h3>Enjoy Many Perks</h3>
                <div className="tutor-li">
                  <ul>
                    <li>Flexible Schedule</li>
                    <li>Work from Anywhere</li>
                    <li>Earn Extra Income</li>
                    <li>Global Student Reach</li>
                  </ul>
                  <ul>
                    <li>Full Content Control</li>
                    <li>Interactive Teaching Tools</li>
                    <li>Dedicated Support Team</li>
                    <li>Build Your Personal Brand</li>
                  </ul>
                </div>
              </div>
              <div className="tutor-btn">
                <a
                  href=""
                  id="become-an-instructor"
                  aria-label="become-an-instructor"
                >
                  become an instructor
                </a>
              </div>
            </div>
            <div className="tutor-image">
              <img src={tutorImg} alt="bg-image" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tutor;
