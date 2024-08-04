import { component$ } from "@builder.io/qwik";
import { Link, useNavigate, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  return (
    <div class="bg-blue-50 text-gray-800 min-h-screen">
    <div class="container mx-auto p-8 text-center">
      <h1 class="text-4xl font-bold mb-6">Welcome to Tic Tac Toe!</h1>
      <p class="text-lg mb-12">
        Ready to test your skills? Jump into a game and challenge yourself or a friend. 
        No downloads needed, just fun and games straight from your browser!
      </p>
      <div>
        <Link href="/play" class="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Play Now
        </Link>
      </div>
    </div>
  </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Tic Tac Toe",
  meta: [
    {
      name: "description",
      content: "Welcome to Tic Tac Toe",
    },
  ],
};
