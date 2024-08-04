import { component$, useContext, useSignal } from "@builder.io/qwik"
import { gameStateContextId } from "~/routes/play";

interface BoxProps {
    idx: number;
}

export default component$((props: BoxProps) => { 
    const gameState = useContext(gameStateContextId);

    return (
        <div onClick$={() => gameState.setBoard(props.idx)} class="w-24 h-24 bg-gray-300 border border-gray-400 hover:bg-gray-400 cursor-pointer flex justify-center items-center">
            {gameState.board[props.idx]}
      </div>
    )
})