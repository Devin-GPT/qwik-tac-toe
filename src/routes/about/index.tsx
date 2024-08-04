import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="bg-gray-100 text-gray-900 min-h-screen">
      <div class="container mx-auto p-8">
        <h2 class="text-2xl font-bold mb-6">About Tic Tac Toe</h2>
        <p class="mb-4">
          Welcome to our Tic Tac Toe game! This classic game is a simple yet fun way to pass the time. 
          Play against the computer or challenge a friend. The rules are simple: the first player to 
          get three of their marks in a row (up, down, across, or diagonally) is the winner.
        </p>
        <p class="mb-4">
          Our game is built using modern web technologies, including the Qwik framework for efficient loading 
          times and interactive experiences, and Tailwind CSS for responsive and attractive design.
        </p>
        <h3 class="text-xl font-semibold mb-3">Features</h3>
        <ul class="list-disc pl-5">
          <li>Responsive design, works on desktop and mobile devices.</li>
          <li>Dynamic AI for challenging gameplay.</li>
          <li>Multiplayer mode to play with friends.</li>
        </ul>
        <p class="mt-4">
          We hope you enjoy playing Tic Tac Toe as much as we enjoyed building it. Have fun and good luck!
        </p>
      </div>
    </div>
  );
});
