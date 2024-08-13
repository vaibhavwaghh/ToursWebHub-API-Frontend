import React from "react";
import NavItem from "./NavItem";

const Account = ({ user }) => (
  <main className="main">
    <div className="user-view">
      <nav className="user-view__menu">
        <ul className="side-nav">
          <NavItem link="#" text="Settings" icon="settings" active={true} />
          <NavItem link="/my-tours" text="My Bookings" icon="briefcase" />
          <NavItem link="#" text="My reviews" icon="star" />
          <NavItem link="#" text="Billing" icon="credit-card" />
        </ul>

        {user.role === "admin" && (
          <div className="admin-nav">
            <h5 className="admin-nav__heading">Admin</h5>
            <ul className="side-nav">
              <NavItem link="#" text="Manage tours" icon="map" />
              <NavItem link="#" text="Manage users" icon="users" />
              <NavItem link="#" text="Manage reviews" icon="star" />
              <NavItem link="#" text="Manage bookings" icon="briefcase" />
            </ul>
          </div>
        )}
      </nav>

      <div className="user-view__content">
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
          <form className="form form-user-data">
            <div className="form__group">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="form__input"
                type="text"
                value={user.name}
                required
                name="name"
              />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                className="form__input"
                type="email"
                value={user.email}
                required
                name="email"
              />
            </div>
            <div className="form__group form__photo-upload">
              <img
                className="form__user-photo"
                src={`img/users/${user.photo}`}
                alt="User photo"
              />
              <input
                className="form__upload"
                type="file"
                accept="image/*"
                id="photo"
                name="photo"
              />
              <label className="btn-text" htmlFor="photo">
                Choose new photo
              </label>
            </div>
            <div className="form__group right">
              <button className="btn btn--small btn--green">
                Save settings
              </button>
            </div>
          </form>
        </div>
        <hr className="line" />
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Password change</h2>
          <form className="form form-user-password">
            <div className="form__group">
              <label className="form__label" htmlFor="password-current">
                Current password
              </label>
              <input
                id="password-current"
                className="form__input"
                type="password"
                placeholder="••••••••"
                required
                minLength="8"
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="password">
                New password
              </label>
              <input
                id="password"
                className="form__input"
                type="password"
                placeholder="••••••••"
                required
                minLength="8"
              />
            </div>
            <div className="form__group ma-bt-lg">
              <label className="form__label" htmlFor="password-confirm">
                Confirm password
              </label>
              <input
                id="password-confirm"
                className="form__input"
                type="password"
                placeholder="••••••••"
                required
                minLength="8"
              />
            </div>
            <div className="form__group right">
              <button className="btn btn--small btn--green btn--save-password">
                Save password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
);

export default Account;
