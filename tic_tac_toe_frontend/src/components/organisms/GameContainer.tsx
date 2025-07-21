"use client";

import React, { useState } from "react";
import { Board } from "../molecules/Board";
import { GameStatus } from "../molecules/GameStatus";
import { ResetButton } from "../atoms/ResetButton";
import {
  calculateWinner,
  getNextValue,
  isDraw,
} from "../../utils/game";
import { SquareValue } from "../atoms/Square";

// PUBLIC_INTERFACE
export function GameContainer() {
  /** Organism encapsulating full Tic Tac Toe game state and controls. */
  const [history, setHistory] = useState<SquareValue[][]>([
    Array(9).fill(null),
  ]);
  const [step, setStep] = useState(0);

  const currentSquares = history[step];
  const winnerResult = calculateWinner(currentSquares);
  const winner = winnerResult?.winner ?? null;
  const winningLine = winnerResult?.line ?? [];
  const draw = !winner && isDraw(currentSquares);
  const nextValue = getNextValue(currentSquares);

  function handleSquareClick(idx: number) {
    if (winner || draw || currentSquares[idx] !== null) return;
    const squares = currentSquares.slice() as SquareValue[];
    squares[idx] = nextValue;
    // Prune history if not at end
    const nextHistory = history.slice(0, step + 1);
    setHistory([...nextHistory, squares]);
    setStep(nextHistory.length);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setStep(0);
  }

  // Process.env example reference for future server/game expansion
  // eslint-disable-next-line no-console
  console.debug("API_URL:", process.env.NEXT_PUBLIC_API_URL);

  return (
    <section
      aria-label="Tic Tac Toe game"
      className="flex flex-col items-center gap-4"
    >
      <GameStatus winner={winner} nextValue={nextValue} draw={draw} />
      <Board
        squares={currentSquares}
        onSquareClick={handleSquareClick}
        nextValue={nextValue}
        winningLine={winningLine}
        disabled={Boolean(winner)}
      />
      <ResetButton onClick={resetGame} disabled={step === 0 && !winner && !draw} />
    </section>
  );
}
