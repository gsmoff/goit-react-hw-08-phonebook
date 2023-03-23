import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectContacts, selectFiltr } from 'redux/contacts/contactsSelectors';
import { deleteContacts } from 'redux/contacts/contactsOperations';
import { Filter } from '../Filter/Filter';

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    // console.log(contacts);
    const dispatch = useDispatch();
    const filter = useSelector(selectFiltr);

    const filteredContacts = () => {
        if (filter === '') return contacts;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const items = filteredContacts();

    return (
        <>
            {contacts.length > 0 ? (
                <>
                    <h3>Contacts</h3>
                    <Filter />
                    <ul>
                        {items.map(({ id, name, phone }) => (
                            <li key={id}>
                                {name}: {phone}{' '}
                                <button
                                    onClick={() => {
                                        dispatch(deleteContacts(id));
                                    }}
                                >
                                    delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <h3>No contacts</h3>
            )}
        </>
    );
};
