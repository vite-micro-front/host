import { GlobalState } from "@/shared/store";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Page = () => {
  const boards = useSelector((state: GlobalState) => state.boards);
  const dispatch = useDispatch();
  const addBoard = (title: string) => {
    dispatch({
      type: "board/created",
      payload: {
        id: String(boards.length + 1),
        title,
      },
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const title = formData.get("title") as string;
          addBoard(title);
        }}
      >
        <input name="title" type="text" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {boards.map((board) => (
          <div key={board.id}>
            <Link to={`/board/${board.id}`}>{board.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
