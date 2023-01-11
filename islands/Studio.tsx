import { useState } from "preact/hooks";

interface StudioProps {
  path: string;
}

async function addComponent(path: string) {
  console.log(path);

  const res = await fetch("/api/studio", {
    method: "PUT",
    body: JSON.stringify({ path: path }),
  });
  console.log(res.body);
}

export default function Studio(props: StudioProps) {
  return (
    <div class="gap-2 w-full border border-blue-500 rounded py-3 px-2">
      <p class="text-3xl">Fresh Studio</p>

      <p>Path: {props.path}</p>

      <div>
        <h2 class="text-2xl">Page Setting</h2>

        <label class="flex gap-2">
          <input type="checkbox" />
          <span>Island</span>
        </label>
        <label class="flex gap-2">
          <input type="checkbox" />
          <span>Island</span>
        </label>
      </div>

      <div>
        <h2 class="text-2xl">Add component</h2>

        <div class="flex gap-2">
          <button class="block border px-3 py-2 rounded">Add Route</button>
          <button class="block border px-3 py-2 rounded">Add Island</button>
          <button class="block border px-3 py-2 rounded">
            Add New JSON API
          </button>
          <button
            class="block border px-3 py-2 rounded"
            onClick={() => {
              addComponent(props.path);
            }}
          >
            Add Component
          </button>
          <button class="block border px-3 py-2  rounded text-red-500">
            Eject
          </button>
        </div>
      </div>
    </div>
  );
}
