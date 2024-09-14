import React, { useState } from 'react';
import '../styles/Navbar.css';
import '../styles/wrapper.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const [isSidebarActive, setSidebarActive] = useState(false);
  const [isOverlayActive, setOverlayActive] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setSidebarActive(true);
    setOverlayActive(true);

    // Close opened sub-menus
    // You need to manage this based on your specific sidebar structure
  };

  const closeSidebar = () => {
    setSidebarActive(false);
    setOverlayActive(false);
  };

  const LoginModal = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const closeModal = (event) => {
      if (event.target === event.currentTarget) {
        setModalVisible(false);
      }
    };
  };


  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      setModalVisible(false);
    }
  };



  return (
    <div id='nav'>
      <div className='back-right'>
        <nav className="navbar">
          <a href='/'>
            <img src="/images/eventbuzz-white.png" className="brand-logo" alt="EventBuzz logo" loading="lazy" />
          </a>
          <div className="search-box">
            <div className="row">
              <ion-icon name="search" />
              <input
                type="text"
                className="search"
                id="input-box"
                placeholder="Search for Movies, Events, Plays, Sports, and Activities"
                autoComplete="off"
              />
            </div>
            <div className="result-box"></div>
          </div>
          <div className="right-container">
            <button className="signin">
              <a href="/login">Sign in</a>
            </button>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <ion-icon name={isMenuOpen ? "close" : "menu"} />
          </button>
        </nav>
      </div>
      <nav className={`subnavbar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navitem">
          <li><a href="#Movies">Movies</a></li>
          <li><a href="#Events">Events</a></li>
          <li><a href="#Sports">Sports</a></li>
        </ul>
      </nav>
      <div className="wrapper" id="wrapper">

        {/* <nav className="sidebar">
      <nav className="sidenavbar">
        <h1>Hey!</h1>
      </nav>
      <nav className="sidesubnavbar">
        <img src="img/rewards.webp" />
        <p>Unlock special offers &amp; great benifits</p>
        <button
          className="login"
          onlick="document.getElementById('id01').style.display='block'"
        >
          Login / Register
        </button>
      </nav>
      <a href="/">
        <div className="lefticon">
          <ion-icon name="notifications-outline" />
        </div>
        <div className="text">Notifications</div>
        <div className="righticon">
          <ion-icon name="chevron-forward-outline" />
        </div>
      </a>
      <a className="btn-disabled" href="/">
        <div className="lefticon">
          <ion-icon name="ticket-outline" />
        </div>
        <div className="text">
          Purchase History
          <br />
          <div className="subtext">View all your bookings &amp; Purchases</div>
        </div>
        <div className="righticon">
          <ion-icon name="lock-closed-outline" />
        </div>
      </a>
      <a className="btn-disabled" href="/">
        <div className="lefticon">
          <ion-icon name="tv-outline" />
        </div>
        <div className="text">
          Stream Library
          <br />
          <div className="subtext">Rented &amp; Purchased Movies</div>
        </div>
        <div className="righticon">
          <ion-icon name="lock-closed-outline" />
        </div>
      </a>
      <a href="#">
        <div className="lefticon">
          <ion-icon name="chatbubble-ellipses-outline" />
        </div>
        <div className="text">
          Help &amp; Support
          <br />
          <div className="subtext">View commonly asked queries and Chat</div>
        </div>
        <div className="righticon">
          <ion-icon name="chevron-forward-outline" />
        </div>
      </a>
      <a className="btn-disabled" href="#">
        <div className="lefticon">
          <ion-icon name="settings-outline" />
        </div>
        <div className="text">
          Accounts &amp; Settings
          <br />
          <div className="subtext">
            Location, Payments, Addresses &amp; More
          </div>
        </div>
        <div className="righticon">
          <ion-icon name="lock-closed-outline" />
        </div>
      </a>
      <a href="#">
        <div className="lefticon">
          <ion-icon name="gift-outline" />
        </div>
        <div className="text">
          Rewards
          <br />
          <div className="subtext">View your rewards &amp; unlock new ones</div>
        </div>
        <div className="righticon">
          <ion-icon name="chevron-forward-outline" />
        </div>
      </a>
      <a href="#">
        <div className="lefticon">
          <ion-icon name="heart-outline" />
        </div>
        <div className="text">BookASmile</div>
        <div className="righticon">
          <ion-icon name="chevron-forward-outline" />
        </div>
      </a>
    </nav> */}
      </div>
    </div>
  );
};

export default Navbar;