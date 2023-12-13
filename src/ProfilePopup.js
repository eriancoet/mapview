import React from "react";
import './ProfilePopup.css';

function ProfilePopup({ isOpen, onClose, profileData }) {
    // Move the default values inside the function body
    const { 
        name = '', 
        email = '', 
        phone = '', 
        address = '', 
        bio = '', 
        membershipLevel = '',
        profilePicture = '' // Default image URL or a placeholder
    } = profileData || {};

    if (!isOpen) return null;

    return (
        <div className="profile-popup-backdrop">
            <div className="profile-popup">
                <button onClick={onClose} className="profile-popup-close">X</button>
                <h2>{name}</h2>
                <img src={profilePicture} alt={name || "Profile Picture"} />
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {address}</p>
                <p>Bio: {bio}</p>
                <p>Membership Level: {membershipLevel}</p>
                {/* Other details can be added here */}
            </div>
        </div>
    );
}

export default ProfilePopup;
