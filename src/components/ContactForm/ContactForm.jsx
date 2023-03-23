import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleCangeForm = event => {
        const { name, value } = event.target;
        if (name === 'name') setName(value);
        if (name === 'phone') setPhone(value);
    };
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleFormSubmit = e => {
        e.preventDefault();
        const contact = {
            id: nanoid(),
            name,
            phone,
        };
        const isValidateForm = validateForm();

        if (!isValidateForm) return;

        dispatch(addContact(contact));

        resetForm();
    };
    const validateForm = () => {
        if (!name || !phone) {
            alert('Some filed is empty');
            return false;
        }
        return onCheckUnique(name);
    };

    const onCheckUnique = name => {
        const isExistContact = !!contacts.find(
            contact => contact.name === name
        );
        isExistContact && alert('Contact is already exist');
        return !isExistContact;
    };

    const resetForm = () => {
        setName('');
        setPhone('');
    };

    return (
        <>
            {/* <h2>Phonebook</h2> */}
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={handleCangeForm}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={handleCangeForm}
                />
                <button type="submit">Add contact</button>
            </form>
        </>
    );
};
