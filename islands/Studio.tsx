import { useState } from "preact/hooks";

interface StudioProps {
  path: string
}


function addComponent(path: string){
  console.log(path)
}


export default function Studio(props: StudioProps) {
  return (
    <div class="gap-2 w-full border border-blue-500 rounded py-3 px-2">
      <p class="text-3xl">Fresh Studio</p>

      <p>Path: {props.path}</p>

      <button class="block border px-3 py-2">Add Route</button>
      <button class="block border px-3 py-2">Add Island</button>
      <button class="block border px-3 py-2">Add New JSON API</button>
      <button class="block border px-3 py-2" onClick={()=>{addComponent(props.path)}}>Add Component</button>
      <button class="block border px-3 py-2 text-red-500">Eject</button>
    </div>
  );
}
