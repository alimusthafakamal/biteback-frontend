import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const email = localStorage.getItem("email");
      if (!email) {
        toast.error("Please log in first");
        return;
      }

      const response = await fetch("http://localhost:5000/user/me", {
        headers: {
          Authorization: `Bearer ${email}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setProfile(result.user);
      } else {
        toast.error("Failed to fetch profile");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedProfile(profile);
  };

  const handleChange = (e) => {
    setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const email = localStorage.getItem("email");
      const response = await fetch("http://localhost:5000/user/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${email}`,
        },
        body: JSON.stringify(editedProfile),
      });

      if (response.ok) {
        toast.success("Profile updated successfully!");
        setProfile(editedProfile);
        setIsEditing(false);
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 my-3">
      <div className="bg-gray-20 shadow-lg rounded-lg p-8 max-w-lg w-full">
        <div className="flex items-center justify-center mb-6">
          <img
            src={profile?.avatar || "https://via.placeholder.com/100"}
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full border"
          />
        </div>
        {isEditing ? (
          <>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  name="fullName"
                  value={editedProfile.fullName || ""}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  value={editedProfile.email || ""}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  name="phone"
                  value={editedProfile.phone || ""}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleEditToggle}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <p className="text-gray-600">{profile?.fullName || "-"}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <p className="text-gray-600">{profile?.email || "-"}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <p className="text-gray-600">{profile?.phone || "-"}</p>
              </div>
            </div>
            {/* <div className="mt-6 flex justify-center">
              <button
                onClick={handleEditToggle}
                className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-900"
              >
                Edit Profile
              </button>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
