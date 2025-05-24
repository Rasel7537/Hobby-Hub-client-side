import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Errorpage from "../pages/ErrorPage/Errorpage";
import Home from "../pages/Home/Home";
import AddNewPeople from "../pages/addNewPeople/AddNewPeople";
import NewGroup from "../components/NewGroup/NewGroup";
import GroupDetails from "../pages/GroupDetails/GroupDetails";
import GroupCard from "../pages/GroupCard/GroupCard";
import AnotherGroupCard from "../pages/AnotherGroupCard/AnotherGroupCard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyGroups from "../pages/MyGroups/MyGroups";
import UpdateGroup from "../pages/UpdateGroup/UpdateGroup";
import PrivateRoutes from "../provider/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("http://localhost:3000/peoples"),
        Component: Home,
      },
      {
        path: "AddNewPeople",
        // Component: AddNewPeople,
        element: (
          <PrivateRoutes>
            <AddNewPeople></AddNewPeople>
          </PrivateRoutes>
        ),
      },
      {
        path: "addNewGroup",
        Component: NewGroup,
      },
      {
        path: "anothrGroupCard",
        loader: () => fetch("http://localhost:3000/peoples"),
        Component: AnotherGroupCard,
      },
      {
        path: "addNewGroupDetails/:id",
        loader: () => fetch("http://localhost:3000/peoples"),
        Component: GroupDetails,
      },
      {
        path: "MyGroups",
        loader: () => fetch("http://localhost:3000/peoples"),
        Component: MyGroups,
      },
      {
        path: "updateGroup/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/peoples/${params.id}`),
        Component: UpdateGroup,
      },
      {
        path: "Login",
        Component: Login,
      },
      {
        path: "Register",
        Component: Register,
      },
    ],
  },
]);
