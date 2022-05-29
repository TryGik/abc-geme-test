import { Link } from "react-router-dom";

export default function GameField(props) {
  const letterTitle = randomLetter(props.data)
  let optionsArr = [letterTitle.letter];

  function randomLetter(alfabet) {
    const min = 0;
    const max = alfabet.length - 1;
    const random = Math.floor(Math.random() * (max - min + 1));
    return alfabet[random];
  }

  function answerOptions(alfabet) {
    let random = Math.floor(Math.random() * alfabet.length);
    optionsArr.push(alfabet[random].letter)
    let mySet = new Set(optionsArr);
    if (Array.from(mySet).length === 3) {
      optionsArr = Array.from(mySet);
      return;
    } else {
      answerOptions(alfabet);
    }
  }
  answerOptions(props.data)

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const shuffleArray = optionsArr;
  shuffle(shuffleArray);

  function resultPath(i) {
    let path = '';
    if (i === letterTitle.letter) {
      path = `/win`;
    } else {
      path = `/lose `;
    };
    return path;
  }

  function letterImage(letter) {
    let arr = props.data;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].letter === letter) {
        console.log(arr[i].letterImg)
        return {
          title: arr[i].letterImg,
          quiz: arr[i].quastionImg
        }
      }
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="game_title">Что это за буква?</h1>
        <div className="field">
          <div className="letter"><img className="letter_Title" src={letterImage(letterTitle.letter).title} alt={letterTitle} /></div>
          <div className="answer">
            <Link to={resultPath(shuffleArray[0])}><div className="picture"><img className="letter_Quiz" src={letterImage(shuffleArray[0]).quiz} alt={shuffleArray[0]} /></div></Link>
            <Link to={resultPath(shuffleArray[1])}><div className="picture"><img className="letter_Quiz" src={letterImage(shuffleArray[1]).quiz} alt={shuffleArray[1]} /></div></Link>
            <Link to={resultPath(shuffleArray[2])}><div className="picture"><img className="letter_Quiz" src={letterImage(shuffleArray[2]).quiz} alt={shuffleArray[2]} /></div></Link>
          </div>
        </div>
      </div>
    </>
  );
}