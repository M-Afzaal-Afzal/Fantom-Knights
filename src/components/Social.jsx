import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP, FaDiscord, FaYoutube,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaYoutube />, link: "https://www.youtube.com/channel/UCONFijG46AOk4-hatqvnxVA" },
  { Social: <FaTwitter />, link: "https://twitter.com/NoFunToads" },
  { Social: <FaDiscord />, link: "https://t.co/3p0rxCcp8Q?amp=1" },
  // { Social: <FaLinkedinIn />, link: "https://twitter.com/" },
  // { Social: <FaPinterestP />, link: "https://www.pinterest.com/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
