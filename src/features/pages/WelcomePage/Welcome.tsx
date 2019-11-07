import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

// Thunks
import { getPosts } from "store/thunks";

// Interfaces
import { IState } from "utils/reducers";

import styles from "./styles.module.scss";

export const Welcome = (): JSX.Element => {
  const { tours, setTours } = useState([]);
  const dispatch = useDispatch();
  const fetchedPosts = useSelector((state: IState) => state.posts.posts);

  useEffect((): void => {
    dispatch(getPosts());
    fetch();
  }, []);

  return (
    <div className={styles.container}>
      {/* {fetchedPosts.length && (
        <div className={styles.wrapper}>
          {fetchedPosts.map(({ id, post }, i) => {
            return (
              <span key={id} className={styles.item}>
                {post}
              </span>
            );
          })}
        </div>
      )} */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            {/* <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchedPosts.map(({ id, post }, i) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {post}
              </TableCell>
              {/* <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
