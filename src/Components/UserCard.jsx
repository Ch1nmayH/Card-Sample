import React from "react";
import { Phone, Email, LocationOn, Female } from "@mui/icons-material";

const UserCard = ({ user }) => {
  return (
    <div className="relative p-2 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-border">
      {/* Inner Card */}
      <div className="bg-black rounded-2xl p-8 shadow-2xl text-white">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <img
            src={user.picture.large}
            alt="User"
            className="w-36 h-36 rounded-full border-4 border-purple-500 shadow-lg"
          />
          {/* Name */}
          <h2 className="mt-6 text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">
            {user.name.first} {user.name.last}
          </h2>
          {/* Gender */}
          <p className="text-lg text-pink-300 flex items-center mt-2">
            <Female className="mr-2 text-pink-500" /> {user.gender.toUpperCase()}
          </p>
          {/* Divider */}
          <div className="w-full border-t border-purple-500 my-6"></div>
          {/* Contact Info */}
          <div className="w-full space-y-4">
            {/* Phone */}
            <div className="flex items-center">
              <Phone className="text-pink-400 mr-4" />
              <p className="text-base">{user.phone}</p>
            </div>
            {/* Email */}
            <div className="flex items-center">
              <Email className="text-pink-400 mr-4" />
              <p className="text-base truncate">{user.email}</p>
            </div>
            {/* Location */}
            <div className="flex items-center">
              <LocationOn className="text-pink-400 mr-4" />
              <p className="text-base">
                {user.location.city}, {user.location.country}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
