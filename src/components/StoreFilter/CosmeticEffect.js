import classes from "./CosmeticEffect.module.css";

const CosmeticEffect = function ({ position, allFilters }) {
  const { cosmetic } = classes;
  return (
    <div
      className={cosmetic}
      style={{
        transform: `translateY(${position * 100}%)`,
        height: `${100 / allFilters.length}%`,
      }}
    ></div>
  );
};

export default CosmeticEffect;
