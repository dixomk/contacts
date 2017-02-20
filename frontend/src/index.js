import React from 'react';
import { render } from 'react-dom';
import ContactsList from './features/contacts/contactsList';
import 'bootstrap/dist/css/bootstrap.min.css';

const optns = {
    contacts: [{
        contactId: 1,
        lastName: 'Nina',
        firstName: 'Reznik',
        email: 'nina@i.ua',
    },{
        contactId: 2,
        lastName: 'Lena',
        firstName: 'Reznik',
        email: 'lena@i.ua',
    }
    ]
};

const rootElement = document.getElementById('root');
render(<ContactsList {...optns} />, rootElement);
