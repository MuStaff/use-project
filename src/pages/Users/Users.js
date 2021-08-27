// Custom Hooks
import { useState } from "react";
import { useFetchPosts } from "../../utils/customHooks/useFetchPosts";
import { useFetchUsers } from "../../utils/customHooks/useFetchUsers";

// Components
// import { Header } from "../Header/Header";
// import { StyledContainer } from "../Container/styled";
import { Window } from "../../components/Window/Window";
import { Post } from "../../components/Post/Post";
import { User } from "../../components/User/User";
import { Loader } from "../../components/Loader/Loader";
// import { Modal } from "../Modal/Modal";
import { ShowList } from "../../components/ShowList/ShowList";
import { Button } from "../../components/Button/Button";
import { ButtonBlue } from "../../components/ButtonBlue/ButtonBlue";
// import { BrowserRouter } from "react-router-dom";

function Users() {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(3);

  const { data, load, err, getData } = useFetchUsers(count, page, true);

  const btnNext = () => {
    if (page >= 0 && (page + 1) * count < data.pagination.total) {
      if (!count) {
        setCount(3);
      }
      setPage(page + 1);
    }
  };

  const btnPrev = () => {
    if (page > 0) {
      if (!count) {
        setCount(3);
      }
      setPage(page - 1);
    }
  };

  const showAll = () => {
    setCount(0);
    setPage(0);
  };

  return (
    <>
      {load && <Loader />}

      {!load && data && (
        <Window title="Users">
          <div>
            <ButtonBlue href="#" onClick={btnPrev}>
              Prev
            </ButtonBlue>

            <div style={{ margin: "0 20px", display: "inline-block" }}>
              {`< ${page + 1} of ${Math.ceil(
                data.pagination.total / (count || data.pagination.total)
              )} >`}
            </div>

            <ButtonBlue href="#" onClick={btnNext}>
              Next
            </ButtonBlue>
          </div>
          <ShowList data={data.data} component={User} />

          <ButtonBlue href="#" onClick={showAll}>
            Show all...
          </ButtonBlue>
        </Window>
      )}

      {!load && err && <Window title={"Error!"}>{err?.error}</Window>}
    </>
  );
}

export default Users;
