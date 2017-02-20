import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';

import ButtonLink from '../../../components/button';

const ContactsToolsPanel = (props) => {
    return (
        <Navbar color="success" light>
            <ButtonLink title="Add" color="info" linkTo="/contacts/new" />
        </Navbar>
    );
};

export default ContactsToolsPanel;
