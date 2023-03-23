import { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { authThunk } from '../../../store/auth/thunk';
import { InputForForm } from '../InputForForm';
// import { getProfile } from 'services/auth-services/auth-service';
import { profileThunk } from '../../../store/auth/thunk';
// import { loginUser } from '../../../services/auth-services/auth-service';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { isLoading } = useSelector(state => state.auth)
    const isAuth = useSelector((state) => state.auth.token)

    // useEffect(() => {
    //     isAuth && getProfile().then(console.log)
    // },[isAuth])
    useEffect(() => {
        console.log(isAuth);
        isAuth && dispatch(profileThunk());
        isAuth && navigate('/contacts');
    }, [dispatch, isAuth, navigate]);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        if (name === 'email') setEmail(value);
        else setPassword(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        // loginUser({ email, password }).then(console.log);
        dispatch(authThunk({ email, password }));
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '100px',
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
        >
            <h2>Phonebook</h2>
            <InputForForm
                handleChange={handleChange}
                value={email}
                placeholder="Email address"
                // label="Email address"
                name="email"
            />
            <InputForForm
                handleChange={handleChange}
                value={password}
                placeholder="Password"
                // label="Password"
                name="password"
                type="password"
            />
            <div className="mb-2">
                <Link to={'/signIn'}>SignIn</Link>
                <button
                    disabled={isLoading}
                    type="submit"
                    className="btn btn-primary"
                    style={{ margin: '5px' }}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};
