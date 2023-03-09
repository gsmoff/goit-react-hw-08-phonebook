import { addContact, fetchContacts } from './contactsOperations';
import { createReducer } from '@reduxjs/toolkit';
import { deleteContacts } from './contactsOperations';
import { filterContact } from './contactsAction';

const initialState = {
    contacts: { items: [], isLoading: false, error: null },
    filter: '',
};

const contactReducer = createReducer(initialState, {
    [fetchContacts.pending]: state => {
        state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = [...payload];
    },
    [fetchContacts.rejected]: (state, { payload }) => {
        state.error = payload;
    },
    [deleteContacts.pending]: state => {
        state.isLoading = true;
    },
    [deleteContacts.fulfilled]: (state, { payload }) => {
        state.contacts = state.contacts.filter(
            contact => contact.id !== payload
        );
    },
    [deleteContacts.rejected]: (state, { payload }) => {
        state.error = payload;
    },
    [addContact.fulfilled]: (state, { payload }) => {
        state.contacts.unshift(payload);
    },
    [addContact.rejected]: (state, { payload }) => {
        state.error = payload;
    },
    [filterContact]: (state, action) => {
        state.filter = action.payload;
    },
});

export default contactReducer;
