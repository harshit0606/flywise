import React from "react";
import classes from "../../styles/footer.module.css";
import Facebook from "../../public/images/icons/facebook.png";
import Instagram from "../../public/images/icons/insta.png";
import Youtube from "../../public/images/icons/youtube.png";
import Linkedin from "../../public/images/icons/linkedin.png";
import Phone from "../../public/images/icons/Vector.png";
import Arrow from "../../public/images/icons/Arrow.png";
import Image from "next/image";
import { Link } from "@material-ui/core";
import Clubhouse from "../../public/images/icons/clubhouse.png";
function footerr() {
    
      

  return (
    <div className={classes.footerDiv}>
      <div className={classes.secDiv}>
        <div className={classes.address}>
          <h1>CONTACT US</h1>
          <div className={classes.number}>
            <div className={classes.phone}>
              <Image src={Phone} />
            </div>
            <p>+19254459180</p>
          </div>
          <p>
            5600 monaghan way,
            <br />
            antioch, California, 94531
          </p>
        </div>
        <div className={classes.iconsDiv}>
          <div className={classes.logodiv}>
            <Image src={Facebook} className={classes.icons} />
          </div>
          <Link href="https://www.instagram.com/flywise_edu/">
          <div className={classes.logodiv}>
            <Image src={Instagram} className={classes.icons} />
          </div>
          </Link>
          <Link href="https://www.youtube.com/channel/UCBm5Y057pEW1jLjJhnoHcHA"><div className={classes.logodiv}>
            <Image src={Youtube} className={classes.icons} />
          </div>
          </Link>
          <Link href="https://www.linkedin.com/company/flywiseoverseas">
          <div className={classes.logodiv}>
            <Image src={Linkedin} className={classes.icons} />
          </div>
          </Link>
          <Link href="https://www.clubhouse.com/club/ms-in-usa-myths-busted">
          <div className={classes.logodiv}>
            <Image src={Clubhouse} className={classes.icons} />
          </div>
          </Link>
          <div className={classes.arrowdiv} id="scrollToTopBtn" onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })
          }}>
          <Image src={Arrow} className={classes.arrow} height="20px" width="15px" />
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        Copyright © {new Date().getFullYear()}
        <span style={{color:"#6ADBDB",fontWeight:"600" }} >&nbsp;Flywise</span>
      </div>
    </div>
  );
}

export default footerr;
