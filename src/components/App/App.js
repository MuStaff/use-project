// Style
import { StyledApp } from "./styled";

// Custom Hooks
import { useState } from "react";
import { useFetchPosts } from "../../utils/customHooks/useFetchPosts";
import { useFetchUsers } from "../../utils/customHooks/useFetchUsers";

// Components
import { Header } from "../Header/Header";
import { StyledContainer } from "../Container/styled";
import { Main } from "../Main/Main";
import { Post } from "../Post/Post";
import { User } from "../User/User";
import { Loader } from "../Loader/Loader";
import { Modal } from "../Modal/Modal";
import { ShowList } from "../ShowList/ShowList";
import { StyledBlueButton } from "../Button/styled";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(3);

  const { data, load, err, getData } = useFetchPosts(count, page, true);
  // const { data, load, err, getData } = useFetchUsers(count, page, true);

  const btnNext = () => {
    if (page >= 0 && (page + 1) * count < data.pagination.total)
      setPage(page + 1);
  };

  const btnPrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const getAllPosts = () => {
    setCount(0);
    setPage(0);
  };
  
  const getAllUsers = () => {
    setCount(0);
    setPage(0);
  };

  return (
    <StyledApp>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
