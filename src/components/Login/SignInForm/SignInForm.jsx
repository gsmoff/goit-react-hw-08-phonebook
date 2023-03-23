import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-hot-toast';

import { signInUser } from '../../../services/auth-services/auth-service';
import { InputForForm } from '../InputForForm';

export const SignInForm = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        if (name === 'email') setEmail(value);
        else if (name === 'userName') setUserName(value);
        else setPassword(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        signInUser({
            name: userName,
            email,
            password,
        })
            .then(() => {
                toast.success('Create user successfully');
                navigate('/login');
            })
            .catch(error => toast.error(error.response.data.message));
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '100px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            }}
        >
            <h2>Phonebook</h2>
            <InputForForm
                handleChange={handleChange}
                value={userName}
                placeholder="User Name"
                // label="User Name"
                name="userName"
            />
            <InputForForm
                handleChange={handleChange}
                value={email}
                // label="Email address"
                placeholder="Email address"
                name="email"
            />
            <InputForForm
                handleChange={handleChange}
                value={password}
                // label="Password"
                placeholder="Password"
                name="password"
                type="password"
            />
            <div className="mb-2">
                <Link to={'/login'}>Login</Link>
                <button
                    style={{ margin: '5px' }}
                    type="submit"
                    className="btn btn-primary"
                >
                    Create User
                </button>
            </div>
        </form>
    );
};
