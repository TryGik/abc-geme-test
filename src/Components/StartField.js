
import { Link } from "react-router-dom";

export default function StartField() {
    return (
        <>
            <div className="container">
                <div className="wrapper_start_game">
                    <Link to="/game"><button className="button_start_game">Начать изучать алфавит</button></Link>
                </div>
            </div>
        </>
    );
}