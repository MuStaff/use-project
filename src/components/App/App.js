// Style
import { StyledApp } from "./styled";

// Custom Hooks
import { useState } from "react";
import { useGetPosts } from "../../utils/customHooks/useFetchPosts";

// Components
import { Header } from "../Header/Header";
import { StyledContainer } from "../Container/styled";
import { Main } from "../Main/Main";
import { Post } from "../Post/Post";
import { Button } from "../Button/Button";
import { StyledBlueButton } from "../Button/styled";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(3);

  const { data, load, err, getData } = useGetPosts(count, page, true);

  const btnNext = () => {
    if (page >= 0) setPage(page + 1);
  };

  const btnPrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const getAllPost = () => {
    setCount(0);
    setPage(0);
  };
  console.log(data);
  return (
    <StyledApp>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <StyledContainer>
        <Main>
          <StyledBlueButton href="#" onClick={getAllPost}>
            Get all posts
          </StyledBlueButton>

          <div>
            <StyledBlueButton href="#" onClick={btnPrev}>
              Prev
            </StyledBlueButton>
            <a>{`< ${page + 1} >`}</a>
            <StyledBlueButton href="#" onClick={btnNext}>
              Next
            </StyledBlueButton>
          </div>

          {data.map((post) => (
            <Post children={post} key={post._id} />
          ))}
        </Main>
      </StyledContainer>
    </StyledApp>
  );
}

export default App;
