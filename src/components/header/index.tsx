import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-lg font-bold">Tic Tac Toe</h1>
      <nav>
        <ul class="flex space-x-4">
          <li><Link href="/" class="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" class="hover:text-gray-300">About</Link></li>
          <li><Link href="/play" class="hover:text-gray-300">Play</Link></li>
        </ul>
      </nav>
    </div>
  </header>
  );
});