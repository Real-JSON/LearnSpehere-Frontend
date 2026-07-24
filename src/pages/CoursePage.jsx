import React from "react";
// import "./CoursePage.css";

const COURSES = [
  {
    id: 1,
    title: "Web Development Masterclass",
    category: "Development",
    instructor: "Nimal Perera",
    level: "Beginner",
    rating: 4.8,
    students: "1.2k",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "UI/UX Design Essentials",
    category: "Design",
    instructor: "Dilini Fernando",
    level: "Intermediate",
    rating: 4.9,
    students: "850",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Data Science & Machine Learning",
    category: "Data Science",
    instructor: "Kasun Jayasuriya",
    level: "Advanced",
    rating: 4.7,
    students: "2.1k",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    category: "Business",
    instructor: "Sarah Silva",
    level: "Beginner",
    rating: 4.6,
    students: "940",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "React & Next.js Deep Dive",
    category: "Development",
    instructor: "Nimal Perera",
    level: "Intermediate",
    rating: 4.9,
    students: "1.8k",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Graphic Design Masterclass",
    category: "Design",
    instructor: "Dilini Fernando",
    level: "Beginner",
    rating: 4.8,
    students: "1.5k",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
  },
];

const CATEGORIES = [
  "All Courses",
  "Development",
  "Design",
  "Data Science",
  "Business",
];

export default function CoursePage() {
  return (
    <div className="course-page">
      {/* 1. HERO HEADER */}
      <header className="hero-header">
        <div className="hero-content">
          <h1 className="hero-title">Explore Our Courses</h1>
          <p className="hero-subtitle">
            Upgrade your skills with industry-leading online courses.
          </p>
        </div>
      </header>

      {/* 2. SEARCH & CATEGORY BAR */}
      <section className="controls-section">
        <div className="controls-card">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search for courses..."
              className="search-input"
            />
          </div>

          <div className="category-list">
            {CATEGORIES.map((category, index) => (
              <button
                key={index}
                className={`category-btn ${index === 0 ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COURSE GRID */}
      <main className="main-container">
        <div className="catalog-header">
          <h2>Featured Courses</h2>
          <span className="course-count">Showing {COURSES.length} courses</span>
        </div>

        <div className="course-grid">
          {COURSES.map((course) => (
            <article key={course.id} className="course-card">
              <div className="thumbnail-wrapper">
                <img
                  src={course.image}
                  alt={course.title}
                  className="thumbnail-img"
                />
                <span className="category-badge">{course.category}</span>
              </div>

              <div className="card-body">
                <div className="card-meta">
                  <span>Level: {course.level}</span>
                  <span>⭐ {course.rating}</span>
                </div>

                <h3 className="course-title">{course.title}</h3>

                <p className="instructor-text">
                  Instructor: <span>{course.instructor}</span>
                </p>

                <div className="card-footer">
                  <span className="student-count">
                    👥 {course.students} students
                  </span>
                  <button className="enroll-btn">Enroll Now</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
