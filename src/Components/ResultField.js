import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCountLose } from '../store/countSlice';
import { increment } from "../store/countSlice";

export default function ResultField() {
  let count = useSelector(selectCountLose);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1 className="game_title">Ваш результат: {count} Неправильно</h1>
        <Link to="/"><div className="resultLose" onClick={() => dispatch(increment('lose'))}></div></Link>
      </div>
    </>
  );
}