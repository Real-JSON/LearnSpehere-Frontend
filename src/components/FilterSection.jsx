import React from "react";

// Filter configuration data containing both text-based categories and rating options
const filters = [
  {
    title: "Categories",
    items: [
      { name: "Art & Design", count: 20 },
      { name: "Technology", count: 12 },
      { name: "Development", count: 88 },
      { name: "Media", count: 27 },
    ],
  },
  {
    title: "Instructor",
    items: [
      { name: "Julien du Casse", count: 20 },
      { name: "James Hornigold", count: 88 },
      { name: "Bartholomew Roberts", count: 27 },
    ],
  },
  { 
    title: "Ratings", 
    type: "rating", 
    items: [5, 4, 3, 2] // Represents star values (5 stars, 4 stars, etc.)
  },
  {
    title: "Price",
    items: [
      { name: "All", count: 20 },
      { name: "Free", count: 88 },
      { name: "Paid", count: 27 },
    ],
  },
  {
    title: "Level",
    items: [
      { name: "All Levels", count: 20 },
      { name: "Beginner", count: 88 },
      { name: "Intermediate", count: 27 },
      { name: "Expert", count: 22 },
    ],
  },
  {
    title: "Video Duration",
    items: [
      { name: "0-1 Hour", count: 20 },
      { name: "1-3 Hours", count: 88 },
      { name: "3-6 Hours", count: 27 },
      { name: "6+ Hours", count: 22 },
    ],
  },
];

const FilterSection = () => {
  return (
    <aside className="filter-section">
        {/* Loop through main filter group (Categories, Ratings, Price, etc.) */}
        {filters.map((filter, index) => (
            <div key={index} className="filter-group">
                <h4 className="filter-title">{filter.title}</h4>
                <ul className="filter-list">
                    {/* Conditional Check: Render star UI if filter type is "rating", otherwise render checkboxes with labels */}
                    {filter.type === "rating" ? (
                        // Loop specifically for rating items
                        filter.items.map((item, idx) => (
                            <li key={idx} className="filter-item">
                                <div className="rating-filter">
                                    <input type="checkbox" name="" id={`${filter.title}-${idx}`} />
                                    <label htmlFor={`${filter.title}-${idx}`}>
                                        {[...Array(item)].map((_, i) => <i key={i} className="fas fa-star filled"></i>)}
                                        {[...Array(5 - item)].map((_, i) => <i key={i} className="far fa-star"></i>)}
                                    </label>
                                </div>
                            </li>
                        ))
                    ) : (
                        // Loop specifically for regular category items
                        filter.items.map((item, idx) => (
                            <li key={idx} className="filter-item">
                              <div className="checkbox-filter">
                                <input type="checkbox" name="" id={`${filter.title}-${idx}`} />
                                <label htmlFor={`${filter.title}-${idx}`}>{item.name}</label>
                                <span className="count">({item.count})</span>
                              </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        ))}
    </aside>
  )
};

export default FilterSection;
