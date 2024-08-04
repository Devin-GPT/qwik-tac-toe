import {
  component$,
  createContextId,
  $,
  useContextProvider,
  useSignal,
  useStore,
  QRL,
  useTask$,
} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Grid from "~/components/grid";
import styles from "./Play.module.css";
import { checkWinner } from "~/utils/checkWinner";

type Cell = "X" | "O" | null;
interface GameState {
  board: Cell[];
  currentPlayer: Cell;
  winner: string | null;
  // TODO: Fix the type of setBoard and resetGame
  setBoard: any;
  resetGame: any;
}

export const gameStateContextId = createContextId<GameState>("game-context");

export default component$(() => {
  const gameState: GameState = useStore({
    board: Array(9).fill(null),
    currentPlayer: "X",
    winner: null,
    setBoard: $(function (this: GameState, idx: number) {
      if (this.board[idx]) return;
      this.board[idx] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      if (checkWinner(this.board)) {
        this.winner = checkWinner(this.board);
      }
    }),
    resetGame: $(function (this: GameState) {
      this.board = Array(9).fill(null);
      this.currentPlayer = "X";
      this.winner = null;
      }
    ),
  });

  useContextProvider(gameStateContextId, gameState);

  return (
    <div
      class={`flex min-h-screen items-center justify-center ${styles.container}`}
    >
      {gameState.winner && (
        <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div class="max-w-sm rounded-lg bg-white p-8 shadow-lg">
            <h2 class="mb-4 text-2xl font-bold">Game Over</h2>
            <p class="mb-6">
              Congratulations! {gameState.winner} has won the game!
            </p>
            <button
              onClick$={() => {
                gameState.resetGame();
              }}
              class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
      <Grid />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Play Tic Tac Toe",
  meta: [
    {
      name: "description",
      content: "Play Tic Tac Toe",
    },
  ],
};
