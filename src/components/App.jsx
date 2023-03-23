import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { SignInForm } from './Login/SignInForm/SignInForm';
import { LoginForm } from './Login/LoginForm/LoginForm';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Contacts } from './Contacts/Contacts';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/signIn" element={<SignInForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/" element={<Layout />}>
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute>
                                <Contacts />
                            </PrivateRoute>
                        }
                    />
                </Route>
            </Routes>
        </>
    );
};
