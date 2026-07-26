import React from 'react'

const CourseCard = ({ course }) => {
    const { title, instructor, rating, students, price, originalPrice, duration, lectures, image, authorImg, category } = course;
  return (
    <div className="course-card">
        <div className="card-image-wrapper">
            <img src={image} alt={title} className="course-image" />
            <span className="category-badge">{category}</span>
            <button className="whishlist-button"><i className="far fa-heart"></i></button>
        </div>

        <div className="card-content">
            <div className="author-info">
                <img src={authorImg} alt={instructor} className="author-image" />
                <span className="author-name">{instructor}</span>
            </div>

            <h3 className="course-title">{title}</h3>
            <div className="course-meta">
                <div className="duration"><i className="far fa-clock"></i> {duration}</div>
                <div className="lectures"><i className="fas fa-play-circle"></i> {lectures} Videos</div>
            </div>

            <div className="card-footer">
                <div className="rating-students">
                    <div className="rating">
                        <i className="fas fa-star"></i> {rating} ({students})
                    </div>
                    <div className="students"><i className="fas fa-user-friends"></i> {students} students</div>
                </div>

                <div className="price-enroll">
                    <div className="price-block">
                        <span className="price">${price.toFixed(2)}</span>
                        <span className="original-price">${originalPrice.toFixed(2)}</span>
                    </div>
                    <button className="enroll-btn">Enroll Now <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard;