import PropTypes from "prop-types";

function CategoryBar({ categories, selectedCategory, onSelect }) {
  // 1. Added missing 'return' keyword here
  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={cat === selectedCategory ? "active-chip" : "chip"}
          // Wrapping in an arrow function to pass arguments
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

// 2. Fixed 'CategoryBar,PropTypes' to 'CategoryBar.propTypes' (dot notation & lowercase 'p')
CategoryBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CategoryBar;
