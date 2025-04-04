import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cuisine: '',
    preferences: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('/api/users/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
        }
      });

      const result = await response.json();
      
      if (response.ok) {
        setProfile(result.data);
      } else {
        throw new Error(result.message || 'Failed to fetch profile');
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);


    // const fetchUserProfile = async () => {
    //     try {
    //         const response = await fetch('/api/users/profile', {
    //             headers: {
    //                 'token': localStorage.getItem('token'),
    //             },
    //         });

    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             throw new Error(errorData.message || 'Failed to fetch profile');
    //         }

    //         const result = await response.json();
    //         if (result.success) {
    //             setProfile(result.data);
    //         } else {
    //             throw new Error(result.message || 'Unknown error occurred');
    //         }
    //     } catch (error) {
    //         toast.error(`Error: ${error.message}`);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/users/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token'),
                },
                body: JSON.stringify(profile),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to update profile');
            }

            const result = await response.json();
            if (result.success) {
                toast.success('Profile updated successfully');
                setIsEditing(false);
            } else {
                throw new Error(result.message || 'Unknown error occurred');
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    if (isLoading) {
        return <div className="profile-container">Loading...</div>;
    }

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </div>

                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <textarea
                        name="address"
                        value={profile.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </div>

                <div className="form-group">
                    <label>Preferred Cuisine:</label>
                    <input
                        type="text"
                        name="cuisine"
                        value={profile.cuisine}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </div>

                <div className="form-group">
                    <label>Dietary Preferences:</label>
                    <input
                        type="text"
                        name="preferences"
                        value={profile.preferences}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                </div>

                <div className="button-group">
                    {!isEditing ? (
                        <button
                            type="button"
                            onClick={() => setIsEditing(true)}
                            className="edit-button"
                        >
                            Edit Profile
                        </button>
                    ) : (
                        <>
                            <button type="submit" className="save-button">
                                Save Changes
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsEditing(false);
                                    fetchUserProfile(); // Reset profile
                                }}
                                className="cancel-button"
                            >
                                Cancel
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Profile;
