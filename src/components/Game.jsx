import { useState } from 'react';
import Board from '../components/Board';




export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]); //riempie history con un array di 9 elementi vuoto
    const [currentMove, setCurrentMove] = useState(0); //setta la mossa corrente a 0 
    const xIsNext = currentMove % 2 === 0; //posso impostare xIsNext se currentMove è pari (modulo 2). serve a calcolare di chi è il turno e poi stabilisce a quale indice tocca giocare. 
    const currentGame = history[currentMove]; //definisce lo stato del gioco corrente ottenuto da currentMove (che rappresenta la mossa) prelevato dall'array history

    function handlePlay(nextSquares) { //handle delle mosse del giocatore

        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; //slice copia una parte dell'array history partendo dall'indice 0 fino all'indice currentMove+1
/*         const nextHistory = [...history, nextSquares]; //slice copia una parte dell'array history partendo dall'indice 0 fino all'indice currentMove+1
 */        console.log(history);
        console.log(currentMove);
        setHistory(nextHistory); //aggiorna lo stato di history prendendo il valore da nextHistory
        setCurrentMove(nextHistory.length - 1); //aggiorna la mossa corrente passando come dato la lunghezza dell'array (quindi gli elementi) togliendo -1 per visualizzare gli indici
    }

    const historyAllMovesPlayed = history.map((squares, move) => { //map serve a mappare e renderizzare tutte le mosse trasformandole in elementi per saltare da una mossa all'altra.
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );

        function jumpTo(changeMove) {
            console.log(changeMove + "sono changeMove")
            setCurrentMove(changeMove);
        }
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentGame} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{historyAllMovesPlayed}</ol>
            </div>
        </div>
    );
}