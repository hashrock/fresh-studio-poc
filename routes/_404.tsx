export function ServerCodePage(
  props: { serverCode: number; codeDescription: string },
) {
  return (
    <>
      <section class="max-w-screen-lg mx-auto">
        <div class="text-center">
          <h1 class="text-9xl font-bold">{props.serverCode}</h1>
        </div>
        <p>But you might want to create...</p>

        <div>
          <button class="border px-2 py-2">
            /unexisted page with JSX rendering
          </button>
          <div>
            <label>
              <input type="checkbox" />
              <span>Custom Handler</span>
            </label>
          </div>
        </div>
        <div>
          <button class="border px-2 py-2">
            /unexisted page with markdown rendering
          </button>
        </div>

      </section>
    </>
  );
}

export default function PageNotFound() {
  return ServerCodePage({
    serverCode: 404,
    codeDescription: "Couldn't find what you're looking for.",
  });
}