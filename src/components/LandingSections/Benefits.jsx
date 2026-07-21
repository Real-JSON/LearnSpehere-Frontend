import React from "react";
// import "../styles/Benefit.css";

const Benefits = () => {
  return (
    <>
      <section>
        <div className="benefit-area">
          <div className="benefit-icon">
            <i class="ri-book-shelf-line"></i>
            <div className="icon-text">
              <p>20+ Lessons</p>
            </div>
          </div>
          <div className="benefit-icon">
            <i class="ri-lock-star-fill"></i>
            <div className="icon-text">
              <p>Lifetime Access</p>
            </div>
          </div>
          <div className="benefit-icon">
            <i class="ri-money-dollar-circle-line"></i>
            <div className="icon-text">
              <p>Value For Money</p>
            </div>
          </div>
          <div className="benefit-icon">
            <i class="ri-group-line"></i>
            <div className="icon-text">
              <p>Community Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
