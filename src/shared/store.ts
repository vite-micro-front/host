import { createStore } from "redux";
import { BoardId } from "@vite-micro-front/contracts/kernel";
import { BoardDeletedEvent } from "@vite-micro-front/contracts/events";
type Board = {
  id: BoardId;
  title: string;
};
export type GlobalState = {
  boards: Board[];
};

type BoardCreatedEvent = {
  type: "board/created";
  payload: Board;
};

type Actions = BoardCreatedEvent | BoardDeletedEvent;

export const store = createStore(
  (
    state: GlobalState = {
      boards: [
        {
          id: "1" as BoardId,
          title: "Board 1",
        },
      ],
    },
    action: Actions
  ): GlobalState => {
    switch (action.type) {
      case "board/created":
        return {
          ...state,
          boards: [...state.boards, action.payload],
        };
      case "board/deleted":
        return {
          ...state,
          boards: state.boards.filter(
            (board) => board.id !== action.payload.boardId
          ),
        };
      default:
        return state;
    }
  }
);
