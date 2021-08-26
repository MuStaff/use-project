// Style
import { StyledApp } from "./styled";

// Custom Hooks
import { useState } from "react";
import { useFetchPosts } from "../../utils/customHooks/useFetchPosts";
import { useFetchUsers } from "../../utils/customHooks/useFetchUsers";

// Components
import { Header } from "../../components/Header/Header";
import { StyledContainer } from "../../components/Container/styled";
import { Main } from "../../components/Main/Main";
import { Post } from "../../components/Post/Post";
import { User } from "../../components/User/User";
import { Loader } from "../../components/Loader/Loader";
import { Modal } from "../../components/Modal/Modal";
import { ShowList } from "../../components/ShowList/ShowList";
import { StyledBlueButton } from "../../components/Button/styled";
import { BrowserRouter } from "react-router-dom";

function Users() {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(3);

  // const { data, load, err, getData } = useFetchPosts(count, page, true);
  const { data, load, err, getData } = useFetchUsers(count, page, true);

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
    <StyledContainer>
      {load && <Loader />}

      {!load && data && (
        <Main title="Posts">
          <StyledBlueButton href="#" onClick={getAllPosts}>
            Get all posts
          </StyledBlueButton>

          {/* <StyledBlueButton href="#" onClick={getAllUsers}>
              Get all users
            </StyledBlueButton> */}

          <div>
            <StyledBlueButton href="#" onClick={btnPrev}>
              Prev
            </StyledBlueButton>

            <div style={{ margin: "0 20px", display: "inline-block" }}>
              {`< ${page + 1} of ${Math.ceil(data.pagination.total / count)} >`}
            </div>

            <StyledBlueButton href="#" onClick={btnNext}>
              Next
            </StyledBlueButton>
          </div>

          <ShowList data={data.data} component={User} />
        </Main>
      )}

      {!load && err && <Main title={"Error!"}>{err?.error}</Main>}
    </StyledContainer>
  );
}

export default Users;
