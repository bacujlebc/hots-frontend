import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Thunks
import { getPosts } from "store/thunks";

// Interfaces
import { IState } from "utils/reducers";

import styles from "./styles.module.scss";

export const Welcome = (): JSX.Element => {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector((state: IState) => state.posts.posts);

  useEffect((): void => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      Welcome
      {fetchedPosts.length && (
        <div className={styles.wrapper}>
          {fetchedPosts.map(({ id, post }, i) => {
            return (
              <span key={id} className={styles.item}>
                {post}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
