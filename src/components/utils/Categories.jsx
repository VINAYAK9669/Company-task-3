function Categories() {
  const categories = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "Blue Hosting",
  ];
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <span key={index}>{category}</span>
      ))}
    </div>
  );
}

export default Categories;
