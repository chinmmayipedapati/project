import React from 'react';

interface ContactInfoProps {
  location: string;
  email: string;
  phone: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ location, email, phone }) => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a></p>
    </div>
  );
};

export default ContactInfo;