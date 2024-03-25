
export default function Square({ value, onSquareClick }) {
    //questo è il componente per ogni singolo quadrato (è un vero e proprio bottone quando viene cliccato avvia funzione)
    return (

        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );

}