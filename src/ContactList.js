import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
    

    const renderContactList = props.contacts.map((contact)=>{
        return <ContactCard contact ={contact}> </ContactCard> ;})
    return (
        
        <>
          <div className="ui container m-top-60">
            <div className="ui celled list">
                {renderContactList}
            </div>
          </div>  
        </>
    )
}

export default ContactList
