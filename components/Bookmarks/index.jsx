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
            <div key={index}>#{item}</div>
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
              let newBookMarks = bookmarksData.filter((item) =>
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
          {stateBookMarks.length
            ? stateBookMarks.map((item, index) => (
                <BookMark key={index} item={item} />
              ))
            : ""}
        </div>
        {!stateBookMarks.length && (
          <div className={styles.emptyBookmarks}>no rows to show</div>
        )}
      </div>
    </section>
  );
}

export default Bookmarks;
