import { SquareValue } from "../components/atoms/Square";

/**
 * Returns winning line and winner if found; else null.
 */
export function calculateWinner(
  squares: SquareValue[]
): { winner: "X" | "O"; line: number[] } | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];
  for (const [a, b, c] of lines) {
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return { winner: squares[a] as "X" | "O", line: [a, b, c] };
    }
  }
  return null;
}

export function isDraw(squares: SquareValue[]): boolean {
  return squares.every(Boolean) && !calculateWinner(squares);
}

export function getNextValue(squares: SquareValue[]): "X" | "O" {
  const xCount = squares.filter((v) => v === "X").length;
  const oCount = squares.filter((v) => v === "O").length;
  return xCount <= oCount ? "X" : "O";
}
