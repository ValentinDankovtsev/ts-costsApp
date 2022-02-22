import React from "react";
import { Link, Redirect } from "react-router-dom";
import IPageProps from "../interfaces/page.interface";
import { signOut } from "../modules/auth";
import { auth } from '../config/firebase';

const HomePage: React.FunctionComponent<IPageProps> = (props) => {
    console.log(auth.currentUser)
  return (
    <div>
      <h1>Домашняя страница</h1>
      <Link to={`/cart`}>
        <button>Посмотреть Главную</button>
      </Link>
      <Link to={`/about`}>
        <button>Посмотреть о Проекте</button>
      </Link>
      <Link to={`/settings`}>
        <button>Посмотреть Настройки</button>
      </Link>
      {/* <Link to={`/auth/signup`}>
        <button>Войти</button>
      </Link> */}
      <Link to={`/auth/signup`}>
        <button onClick={() => signOut()}>Выйти</button>
      </Link>
      {/* {auth.currentUser?<Redirect to="/"/>:<Redirect to="/auth/signup"/>} */}
    </div>
  );
};

export default HomePage;
