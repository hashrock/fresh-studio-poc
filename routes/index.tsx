import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Studio from "../islands/Studio.tsx";

const path = import.meta.url;

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-5xl">Fresh Studio PoC</h1>

        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />

        <Studio path={path} />
        <button>Hello</button>
        {/* insert here */}
      </div>
    </>
  );
}
