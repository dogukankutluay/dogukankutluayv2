import React, { useEffect, useState } from "react";
import styles from "../../styles/Bookmarks.module.scss";
import bookmarksData from "../../bookmarks.json";
//import { SliderArrowLeft, SliderArrowRight } from '../../assets/icons';
const BookMark = ({ item }) => {
  return (
    <a
      className={styles.bookmark}
      rel="noreferrer"
      target="_blank"
      href={item.href}
    >
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
  const [textValue, setValue] = useState("");
  const [stateBookMarks, setStateBookMarks] = useState(bookmarksData);

  return (
    <section id="bookmarks" className={styles.bookmarks}>
      <div className={styles.bookmarksHeader}>
        <h1>MY BOOKMARKS</h1>

        <div className={styles.inputWr}>
          <input
            onChange={({ target: { value } }) => {
              setValue(value);

              if (value.length < 1) {
                setStateBookMarks(bookmarksData);
                return;
              }
              let newBookMarks = stateBookMarks.filter((item) =>
                (item.desc + item.title).toLocaleLowerCase().includes(value)
              );
              setStateBookMarks(newBookMarks);
            }}
            value={textValue}
            type="text"
            placeholder="Search "
          />
          {textValue.length ? (
            <div
              onClick={() => {
                setValue("");
                setStateBookMarks(bookmarksData);
              }}
              className={styles.removeTextIconWr}
            >
              <span className={styles.removeTextIcon}>x</span>
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.bookmarksContent}>
        <div className={styles.bookmarksList}>
          {stateBookMarks.length ? (
            stateBookMarks.map((item, index) => (
              <BookMark key={index} item={item} />
            ))
          ) : (
            <div className={styles.emptyBookmarks}></div>
          )}
        </div>
      </div>
    </section>
  );
}
/**
 *   <div className={styles.bookmarksPagination}>
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
 */
export default Bookmarks;
