import React from 'react';
import styles from '../../styles/Contact.module.scss';
import { Email } from '../../assets/icons';
import myPhoto from '../../assets/images/my-photo.jpg';
import Image from 'next/image';
function Contact() {
  const date = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let month = months[date.getMonth()];
  let monthNumber = date.getMonth() + 1;
  let year = date.getFullYear();
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactHeader}>
        <h1>Contact</h1>

        <a
          href="mailto:dogu_kutluay_1999@hotmail.com"
          target="_blank"
          rel="noreferrer">
          <Email />
          DKUTLUAY
        </a>
      </div>
      <div className={styles.contactContent}>
        <Image
          width={80}
          height={80}
          className={styles.contactPhoto}
          alt="Doğukan Kutluay iletişim fotoğrafı"
          src={myPhoto}
        />
        <div className={styles.letMeetWr}>
          <h1>DOĞUKAN KUTLUAY</h1>
          <div className={styles.availeble}>
            <span></span>
            <div className={styles.date}>
              {month + ' ' + monthNumber}, {year}
            </div>
          </div>
          <p>
            You can contact me via my email or social media accounts. i like to
            communicate with people 😇.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
