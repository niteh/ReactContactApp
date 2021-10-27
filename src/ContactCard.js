import React from 'react'
import user from "./images/user-icon.png"

const ContactCard = (props) => {

    const {id, name, email} = props.contact;
    return (
        <>
         <div className="item">
         <img src={user} className="ui avatar image" alt="user image"/>
                <div className="content">
                   
                    <div className="header">
                        {name}
                    </div>
                    <div >{email}</div>
                </div>
                 <div className="right floated content">
                <i className="trash alternate outline icon right" style={{color: "red" }}></i>
                </div>
            </div>
            
        </>
    )
}

export default ContactCard
