import React, { useState } from 'react';
import styles from '../../styles/Bookmarks.module.scss';
import bookmarksData from '../../bookmarks.json';
import { SliderArrowLeft, SliderArrowRight } from '../../assets/icons';
const BookMark = ({ item }) => {
  return (
    <a
      className={styles.bookmark}
      without
      rel="noreferrer"
      target="_blank"
      href={item.href}>
      <div className={styles.left}>
        <h1>{item.title}</h1>
        <p>{item.desc}</p>

        <h2>{item.link}</h2>
      </div>
      <div className={styles.right}>
        <div className={styles.tags}>
          {item.tags.map((item, index) => (
            <span key={index}>#{item}</span>
          ))}
        </div>
      </div>
    </a>
  );
};
function Bookmarks() {
  const [value, setValue] = useState('');
  return (
    <section id="bookmarks" className={styles.bookmarks}>
      <div className={styles.bookmarksHeader}>
        <h1>MY BOOKMARKS</h1>

        <div className={styles.inputWr}>
          <input
            onChange={e => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="Search "
          />
          {value.length ? <span onClick={() => setValue('')}>x</span> : null}
        </div>
      </div>
      <div className={styles.bookmarksContent}>
        <div className={styles.bookmarksList}>
          {bookmarksData.slice(0, 3).map((item, index) => (
            <BookMark key={index} item={item} />
          ))}
        </div>
        <div className={styles.bookmarksPagination}>
          <button>
            <SliderArrowLeft />
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <h1>...</h1>
          <button>34</button>
          <button>
            <SliderArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Bookmarks;
