import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { dellTokenAuth, setTokenAuth } from '../../api/api';
import { logOutAction } from '../../store/auth/slice';
import { profileThunk } from '../../store/auth/thunk';
// import { getProfile } from 'services/auth-services/auth-service';

const Header = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const profile = useSelector(state => state.auth.profile);
    const isAuth = useSelector(state => state.auth.token);

    const handleLogOut = () => {
        dispatch(logOutAction());
        dellTokenAuth();
        navigate('/');
    };
    // useEffect(() => {
    //     isAuth && getProfile().then(console.log)
    // },[isAuth])
    useEffect(() => {
        isAuth && setTokenAuth(`Bearer ${isAuth}`);
        !profile.name && dispatch(profileThunk());
    }, [dispatch, isAuth, profile.name]);

    return (
        <nav>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: '20px',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                }}
            >
                <h2 style={{ textAlign: 'right' }}>Phonebook</h2>
                <div>
                    <div>
                        {isAuth && (
                            <>
                                <Link to="/contacts"></Link>
                            </>
                        )}
                    </div>
                </div>
                {isAuth && (
                    <div style={{ textAlign: 'right' }}>{profile.email}</div>
                )}
                <button
                    style={{ margin: '10px' }}
                    onClick={() => {
                        isAuth ? handleLogOut() : navigate('/login');
                    }}
                >
                    {isAuth ? 'Logout' : 'Login'}
                </button>
            </div>
        </nav>
    );
};

export default Header;
