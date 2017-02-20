import React, { PropTypes } from 'react';
import ButtonLink from '../../../components/button/';

const ContactsListItem = ({ data, pathToEdit, onDeleteHandler }) => {
    const { lastName, firstName, email } = data;
    return (<tr>
            <td>{lastName}</td>
            <td>{firstName}</td>
            <td>{email}</td>
            <td>
                <ButtonLink color="info" title="Edit" linkTo={pathToEdit}/>
                <ButtonLink color="info" title="Del" clickHandler={(ev) => {ev.preventDefault(); onDeleteHandler()}}/>
            </td>
        </tr>);
};

ContactsListItem.propTypes = {
    data: PropTypes.object,
    pathToEdit: PropTypes.string,
    onDeleteHandler: PropTypes.func
};

ContactsListItem.defaultProps = {
    data: { lastName: '', firstName: '', email: '', contactId: ''},
    pathToEdit: '',
    onDeleteHandler: () => {}
};

export default ContactsListItem;
