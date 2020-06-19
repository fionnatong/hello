import React from "react";
import "./profile.css";

const Profile = () => (
  <div className="profile">
    <div className="profile__header">
      <h1>
        hello! i'm fionna{" "}
        <span role="img" aria-label="alien-emoji">
          👾
        </span>
      </h1>
    </div>
    <div className="profile__description">
      <p>i'm a software engineer in sunny singapore.</p>
      <p>
        i've been discovering the wonders of web development since graduation.
      </p>
    </div>
  </div>
);

export default Profile;
