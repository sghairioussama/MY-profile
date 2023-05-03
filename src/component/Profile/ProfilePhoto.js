import React from 'react';


function UserProfile(props) {
    return (
        <div>
            <img src="https://cdn.funinformatique.com/wp-content/uploads/2019/11/17174500/savoir-qui-regarde-profil-whatsapp.jpg"
                alt={UserProfile.oussema}
                width={200}
                height={200}
                className="profile-photo"
                style={{borderRadius: '50%', marginTop: '40px' } // profilePhotoStyle object
                }/>
        </div>
    );
}

export default UserProfile;