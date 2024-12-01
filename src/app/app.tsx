import { store } from "@/shared/store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <Provider store={store}>
      <div>
        <header style={{ color: "red" }}>App</header>
        <Outlet />
      </div>
    </Provider>
  );
}
