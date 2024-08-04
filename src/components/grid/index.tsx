import { component$, useContext} from "@builder.io/qwik";
import Box from "../box";

export default component$(() => {  
  return (
    <div class="mx-auto grid max-w-sm grid-cols-3 gap-2 rounded-lg bg-white p-4 shadow-lg">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Box key={idx} idx={idx}/>
      ))}
    </div>
  );
});
