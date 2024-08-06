import drawerImg from "./assets/drawers.jpg";
import avaterImg from "./assets/avatar-michelle.jpg";
import shareIcon from "./assets/icon-share.svg";
import facebookIcon from "./assets/icon-facebook.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import pinterestIcon from "./assets/icon-pinterest.svg";
import { useState } from "react";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((is) => !is);
  }

  return (
    <section className="card">
      <img src={drawerImg} alt="drawers" />
      <article className="article-wrapper">
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <section className="avater-wrapper">
          <img src={avaterImg} alt="Michelle" className="avatar" />
          <div className="staff-wrapper">
            <h1>Michelle Appleton </h1>
            <p>28 Jun 2020</p>
          </div>
          <button onClick={handleClick} className="share-btn">
            <img src={shareIcon} alt="Share" className="share-icon" />
          </button>
        </section>
      </article>
      {isOpen && (
        <div className="media-wrapper">
          <p>SHARE</p>
          <img src={facebookIcon} alt="facebook" className="media-icon" />
          <img src={twitterIcon} alt="twitter" className="media-icon" />
          <img src={pinterestIcon} alt="pinterest" className="media-icon" />
          <button onClick={handleClick} className="mobile-btn">
            <img src={shareIcon} alt="Share" className="mobile-icon" />
          </button>
          <span></span>
        </div>
      )}
    </section>
  );
};

export default Card;
