import React, { Component } from 'react';

export default class Contacts extends Component{
    constructor(props){
        super(props);
    }

    render(){
        <div>
            <ContactsToolsPanel />
            <ContactsList />
        </div>
    }
}
