import React from 'react'
import Footer from '../components/Footer';

const Course = () => {
  return (
    <>
        <div className="breadcrumb-section">
        <div className="container">
            <h1>Courses</h1>
            <p>Home &gt; <span className="current">Courses</span></p>
        </div>
    </div>

    <main className="main-content container">
        <section className="course-grid-container">
            <div className="grid-header">
                <p>Showing Results 1-8 of 24 results</p>
                <div className="grid-controls">
                    <select name="" id="" className="sort-select">
                        <option value="">Sort by: Default</option>
                    </select>

                    <button className="grid-view-button-active"><i className="fas fa-th-large"></i></button>
                    <button className="list-view-btn"><i className="fas fa-list"></i></button>
                </div>
            </div>

            <div className="course-grid">
                {/* Loop the courses with courseData */}
            </div>

            <div className="pagination">
                <button>&laquo;</button>
                <button className='active'>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>&raquo;</button>
            </div>
        </section>
    </main>

    <section className="newsletter-section">
        <div className="container">
            <div className="newsletter-text">
                <span className="subtitle">Get Every Single Updates</span>
                <h2>Subscribe Newsletter</h2>
            </div>

            <div className="newsletter-form">
                <input type="email" name="" id="" placeholder='Enter Your Email'/>
                <button type="submit">Subscribe Newsletter <i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    </section>

    <Footer/>
    </>
    
  )
}

export default Course;