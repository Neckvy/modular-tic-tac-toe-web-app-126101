import React from "react";

// PUBLIC_INTERFACE
export function GameStatus({
  winner,
  nextValue,
  draw,
}: {
  winner: "X" | "O" | null;
  nextValue: "X" | "O";
  draw: boolean;
}) {
  /** Displays current game status: next player, winner, or draw. */
  return (
    <div
      className="text-lg sm:text-2xl font-semibold mt-2 mb-4 text-foreground"
      aria-live="polite"
      aria-atomic="true"
      data-testid="game-status"
    >
      {winner ? (
        <span>
          <span className="text-accent">{winner}</span> wins!
        </span>
      ) : draw ? (
        <span className="opacity-80">It&apos;s a draw.</span>
      ) : (
        <span>
          Next:{" "}
          <span className="text-primary">
            {nextValue}
          </span>
        </span>
      )}
    </div>
  );
}
