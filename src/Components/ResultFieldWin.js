import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCountWin } from '../store/countSlice';
import { increment } from "../store/countSlice";

export default function ResultFieldWin() {
  let count = useSelector(selectCountWin);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1 className="game_title">Ваш результат: {count} Правильно</h1>
        <Link to="/"><div className="resultWin" onClick={() => dispatch(increment('win'))}></div></Link>
      </div>
    </>
  );
}