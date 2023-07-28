
export const Square = ({ value, onSquareClick }) => {



    return (
        <button className="square" onClick={() =>onSquareClick(value)} >
            {value}
        </button>
    )
}