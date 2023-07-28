import "./TicTacToe.css";
import { Board } from "./components/Board";

export const TicTacToe = () => {
    return (
        <div className="TicTacToeWrapper">
            <h2>Tic Tac Toe</h2>
            <Board />
        </div>
    )
}