"use client";

import React from "react";

export type SquareValue = "X" | "O" | null;

// PUBLIC_INTERFACE
export function Square({
  value,
  onClick,
  disabled,
  highlight,
  "aria-label": ariaLabel,
}: {
  value: SquareValue;
  onClick: () => void;
  disabled: boolean;
  highlight?: boolean;
  "aria-label": string;
}) {
  /** This is a public atomic button for Tic Tac Toe grid square, accessible and themable. */
  return (
    <button
      className={`w-16 h-16 sm:w-24 sm:h-24 border-2 rounded-lg text-3xl sm:text-5xl flex items-center justify-center font-mono hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent transition
        ${
          disabled
            ? "cursor-not-allowed bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-600"
            : "cursor-pointer bg-background"
        }
        ${highlight ? "ring-4 ring-primary" : ""}
      `}
      // Only invoke onClick if not disabled, for extra interactivity robustness
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      tabIndex={0}
      data-testid="square"
      type="button"
    >
      {value}
    </button>
  );
}
