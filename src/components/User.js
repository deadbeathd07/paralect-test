import React from "react";
import RepositoriesTable from "./RepositoriesTable";
import ReposisEmpty from "./ReposisEmpty";
import reposIcon from "../icons/repository-icon.svg";

const reposText = "Repository list is empty";

function User({ user, userRepos }) {
  return (
    <section className="user">
      <div className="user__inner">
        <div className="user__information">
          <div
            className="user__img-box"
            style={{ backgroundImage: `url(${user.avatar_url})` }}
          ></div>
          <h3 className="user__name">{user.name}</h3>
          <a className="user__link" href={user.html_url}>
            {user.login}
          </a>
          <div className="user__descriptions">
            <p className="user__description user__description_followers">
              {user.followers} followers
            </p>
            <p className="user__description user__description_following">
              {user.following} followings
            </p>
          </div>
        </div>
        <div className="user-repos-box">
          {userRepos === undefined || userRepos === null || userRepos.length === 0 ? (
            <ReposisEmpty icon={reposIcon} text={reposText} />
          ) : (
            <RepositoriesTable items={userRepos} itemsPerPage={4} />
          )}
        </div>
      </div>
    </section>
  );
}

export default User;
