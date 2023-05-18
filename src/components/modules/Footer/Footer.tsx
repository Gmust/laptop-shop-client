import Image from 'next/image';
import { FaCcAmazonPay, FaCcApplePay, FaCcMastercard, FaCcVisa, FaGooglePay } from 'react-icons/fa';
import { AiFillFacebook, AiFillInstagram, AiFillRedditSquare, AiFillYoutube } from 'react-icons/ai';
import { FcCopyright } from 'react-icons/fc';
import Link from 'next/link';
import { ROUTES } from '@utils/constants';
import classes from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={classes.footer}>

      <div className={classes.footerTop}>
       <span className={classes.rights}>
          <Image src='/img/footerlogo.webp' alt={'footerlogo'} width={70} height={70} />
          "Stoptop". All rights reserved! <FcCopyright size='1.4em' style={{ marginLeft: '5px' }} />
       </span>

        <div className={classes.footerList}>
          <div className={classes.divider}></div>
          <div className={classes.list}>
            <h3>Online shop</h3>
            <ul>
              <li><Link href={ROUTES.MAIN_PAGE}>Catalog</Link></li>
              <li><Link href={ROUTES.DELIVERY_PAGE}>Delivery and payment</Link></li>
            </ul>

          </div>
        </div>

        <div className={classes.footerList}>
          <div className={classes.divider}></div>
          <div className={classes.list}>
            <h3>About us</h3>
            <ul>
              <li><Link href={ROUTES.ABOUT_PAGE}>About us</Link></li>
              <li><Link href={'#'}>Feedback</Link></li>
              <li><Link href={ROUTES.CONTACTS_PAGE}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={classes.horizontalDivider}></div>

      <div className={classes.footerBottom}>
        <div className={classes.paymentMethods}>
          <h3>We accept for payment: </h3>
          <ul>
            <li><FaCcVisa size={'2.1em'}/></li>
            <li><FaCcMastercard size={'2.1em'}/></li>
            <li><FaGooglePay size={'2.1em'}/></li>
            <li><FaCcApplePay size={'2.1em'}/></li>
            <li><FaCcAmazonPay size={'2.1em'}/></li>
          </ul>
        </div>


        <div className={classes.socials}>
          <h3>Our social networks: </h3>
          <ul>
            <li><Link href={'#'}><AiFillFacebook size={'2em'}/></Link></li>
            <li><Link href={'#'}>< AiFillInstagram size={'2em'}/></Link></li>
            <li><Link href={'#'}><AiFillYoutube size={'2em'}/></Link></li>
            <li><Link href={'#'}><AiFillRedditSquare size={'2em'}/></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

