"use client";

import React from "react";
import { Square, SquareValue } from "../atoms/Square";

// PUBLIC_INTERFACE
export function Board({
  squares,
  onSquareClick,
  winningLine,
  nextValue,
  disabled,
}: {
  squares: SquareValue[];
  onSquareClick: (idx: number) => void;
  winningLine?: number[];
  nextValue: "X" | "O";
  disabled?: boolean;
}) {
  /** Modular board for Tic Tac Toe, rendering atomic squares, themed and accessible. */
  return (
    <div
      className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-4"
      role="group"
      aria-label="Tic Tac Toe board"
      tabIndex={0}
    >
      {squares.map((val, idx) => (
        <Square
          key={idx}
          value={val}
          // Disabled only if board/game is disabled (terminal) or square is filled
          disabled={!!disabled || val !== null}
          highlight={winningLine?.includes(idx)}
          onClick={() => onSquareClick(idx)}
          aria-label={
            val
              ? `Square ${idx + 1}, ${val}`
              : `Square ${idx + 1}, empty. Place ${nextValue}`
          }
        />
      ))}
    </div>
  );
}
