import React from 'react'
import "./contactInfo.css"

const contactInfo = ({
  contactDes,
  phoneNb,
  email,
  linekdinLink,
  fbLink,
  instagramLink,
}) => {
  return (
    <div className="contactInfoDesc">
      <div className="itemContactInfodDesc">
        <p className="contactDesc">{contactDes}</p>
        <button className="editContactInfoDesc">edit</button>
        <button className="deleteContactInfoDesc">delete</button>
      </div>
      <div className="itemContactInfodDesc">
        <p>{phoneNb}</p>
        <button className="editContactInfoDesc">edit</button>
        <button className="deleteContactInfoDesc">delete</button>
      </div>
      <div className="itemContactInfodDesc">
        <p>{email}</p>
        <button className="editContactInfoDesc">edit</button>
        <button className="deleteContactInfoDesc">delete</button>
      </div>
      <div className="itemContactInfodDesc">
        <p>{linekdinLink}</p>
        <button className="editContactInfoDesc">edit</button>
        <button className="deleteContactInfoDesc">delete</button>
      </div>
      <div className="itemContactInfodDesc">
        <p>{fbLink}</p>
        <button className="editContactInfoDesc">edit</button>
        <button className="deleteContactInfoDesc">delete</button>
      </div>
      <div className="itemContactInfodDesc">
        <p>{instagramLink}</p>
        <button className="editContactInfoDesc">edit</button>
        <button className="deleteContactInfoDesc">delete</button>
      </div>
    </div>
  );
};

export default contactInfo