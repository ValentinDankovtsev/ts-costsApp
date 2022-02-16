import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import IPageProps from '../../interfaces/page.interface';
import firebase from 'firebase';
import { SignInWithSocialMedia, signOut } from '../../modules/auth';
import { Providers } from '../../config/firebase';

// import {signInWithRedirect} from "firebase/auth"


const SignUpPage: React.FunctionComponent<IPageProps> = props => {

    const [authenticating, setAuthenticating] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== '') setError('');

        setAuthenticating(true);

        SignInWithSocialMedia(provider)
            .then(result => {
                history.push('/');
            })
            .catch(error => {
                setAuthenticating(false);
                setError(error.message);
            });
    }


    return (
        <div className="AuthLogin">
            <div className="auth-main-container">
                <div>
                    <h1 >Добро пожаловать в React App</h1>
                    <p >Пожалуйста, зарегистрируйтесь, чтобы продолжить, выбрав один из вариантов ниже.</p>
                </div>
                <div className="auth-btn-wrapper">
                    <button
                        disabled={authenticating}
                        // onClick={() => signInWithSocialMedia(Providers.google)}
                        onClick={() => signInWithSocialMedia(Providers.google)}
                    >
                        Войти с помощью Google</button>
                    <Link to={`/`}>
                        <button>Вернуться на домашнюю страницу</button>
                    </Link>
                    <button onClick={() => signOut()}>Выйти</button>
                </div>
            </div>
        </div>
    );
}
export default SignUpPage;