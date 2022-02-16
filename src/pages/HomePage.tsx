import React from 'react';
import { Link } from 'react-router-dom';
import IPageProps from '../interfaces/page.interface';
import { signOut } from '../modules/auth';

const HomePage: React.FunctionComponent<IPageProps> = props => {
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
            <Link to={`/auth/signup`}>
                <button>Войти</button>
            </Link>
            {/* <button onClick={() => signOut()}>Выйти</button> */}
        </div>
    );
}

export default HomePage;