import Button from "./Button";
import React from "react";
import "./profile.css";

const Profile = () => (
  <div className="profile">
    <div className="profile__header">
      <h1>
        hello, i'm fionna!{" "}
        <span role="img" aria-label="alien-emoji">
          👾
        </span>
      </h1>
    </div>
    <div className="profile__description">
      <p>
        i'm a budding software engineer in sunny singapore and i love burgers
        {"  "}
        <span role="img" aria-label="burger-emoji">
          🍔
        </span>
        .
      </p>
      <p>
        i've been discovering the wonders of web development since graduation.
        what's even better is that i get to use these skills to develop
        solutions that bring meaning to citizens' lives!
      </p>
      <p>
        join me in my humble journey as i seek to learn from people who have
        walked the path i wish to embark on and those who find meaning in what
        they do :)
      </p>
    </div>
    <div className="profile__link-segment">
      <Button url="https://www.linkedin.com/in/fionnatong/" text="linkedin" />
      <Button url="https://github.com/fionnatong" text="github" />
      <Button url="mailto:fionnatong@gmail.com" text="email" />
    </div>
  </div>
);

export default Profile;
