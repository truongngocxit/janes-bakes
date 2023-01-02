import classes from "./StoreFront.module.css";
import StoreItem from "../StoreItem/StoreItem";
import LoadingSpinner from "../UI/LoadingSpinner";
import SadFace from "../UI/SadFace";

const StoreFront = function ({
  letterFilter,
  tagFilter,
  products,
  isLoading,
  error,
}) {
  const { storeFront, message } = classes;

  if (isLoading) {
    return (
      <div className={message}>
        <LoadingSpinner />
      </div>
    );
  }
  if (!isLoading && error) {
    return <div className={message}>error</div>;
  }

  const filteredProducts = products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(letterFilter) ||
        p.tag.includes(letterFilter)
    )
    .filter((p) => {
      if (tagFilter === "all") return p;
      else {
        return p.tag === tagFilter;
      }
    });

  if (!isLoading && !error && filteredProducts.length === 0) {
    return (
      <div className={message}>
        <SadFace />
        <p>No cakes found. Please try another query ;{")"}</p>
      </div>
    );
  }

  if (!isLoading && !error && filteredProducts.length > 0) {
    return (
      <ul className={storeFront}>
        {filteredProducts.map((p) => (
          <StoreItem key={p.id} {...p} />
        ))}
      </ul>
    );
  }
};

export default StoreFront;
