import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/contactsSlice';

export const store = configureStore({
    reducer: { contacts: contactReducer },
});
