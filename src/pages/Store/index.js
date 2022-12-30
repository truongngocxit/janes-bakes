import classes from "./Store.module.css";
import SearchForm from "../../components/SearchForm.js/SearchForm";
import StoreFilter from "../../components/StoreFilter/StoreFilter";
import StoreFront from "../../components/StoreFront/StoreFront";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Store = function ({ tag }) {
  const navigate = useNavigate();
  const [letterQuery, setLetterQuery] = useState("");
  const [tagQuery, setTagQuery] = useState(tag || "all");

  //Modify url query params
  let urlParams = `?tag=${tagQuery}`;
  if (letterQuery.trim() !== "") urlParams += `&${letterQuery}`;

  useEffect(() => {
    navigate(urlParams);
  }, [navigate, urlParams]);

  const { storeContainer, storeMenu } = classes;
  return (
    <div className={storeContainer}>
      <menu className={storeMenu}>
        <SearchForm filterByLetter={setLetterQuery} filterValue={letterQuery} />
        <StoreFilter filterByTag={setTagQuery} tagValue={tagQuery} />
      </menu>
      <StoreFront letterFilter={letterQuery} tagFilter={tagQuery} />
    </div>
  );
};

export default Store;
