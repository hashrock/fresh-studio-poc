import { HandlerContext } from "$fresh/server.ts";
import { join } from "https://deno.land/std@0.170.0/path/mod.ts";

interface File {
  name: string;
  isDirectory: boolean;
  children?: File[];
}

function getFilesRecursively(dir: string): File[] {
  const files = Deno.readDirSync(dir);
  const filesArray: File[] = [];
  for (const file of files) {
    if (file.isDirectory) {
      const sub = getFilesRecursively(join(dir, file.name));
      filesArray.push({ name: file.name, isDirectory: true, children: sub });
    } else {
      filesArray.push({ name: file.name, isDirectory: false });
    }
  }
  return filesArray;
}

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const filesArray = getFilesRecursively(Deno.cwd());
  const body = JSON.stringify(filesArray);
  return new Response(body);
};
