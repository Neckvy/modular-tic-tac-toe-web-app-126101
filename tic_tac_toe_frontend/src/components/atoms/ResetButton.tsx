import React from "react";

// PUBLIC_INTERFACE
export function ResetButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  /** Accessible reset button for restarting the game, themable. */
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="mt-4 px-6 py-2 rounded-md bg-accent hover:bg-accent/80 text-white text-base font-bold shadow transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent aria-disabled:opacity-60 aria-disabled:cursor-not-allowed"
      aria-label="Restart the game"
      type="button"
    >
      Restart Game
    </button>
  );
}
