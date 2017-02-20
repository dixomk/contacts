import * as urls from '../../../utils/urls';
import React, { PropTypes, Component } from 'react';
import { Table } from 'reactstrap';
import ContactsListItem from '../contactsListItem';
import ContactsToolsPanel from '../contactsToolsPanel';

export default class ContactsList extends Component{
    constructor(props){
        super(props);
    }
    deleteContact(contactId){
        this.props.actions.deleteContact(contactId);
    }
    createItems(){
        const { list } = this.props;
        return list.map((contact, indx) => {
            return <ContactsListItem
                key={indx}
                data={contact}
                pathToEdit={`${urls.pathToEdit}${contact.contactId}`}
                onDeleteHandler={ () => this.deleteContact(contact.contactId) }/>
        });
    }
    render(){

        return(
            <div>
                <ContactsToolsPanel />
                <Table>
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                        {this.createItems()}
                    </tbody>
                </Table>
            </div>
        );
    }
}
