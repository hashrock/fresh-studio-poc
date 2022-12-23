import { HandlerContext, Handlers } from "$fresh/server.ts";
import { readAll } from "https://deno.land/std@0.170.0/streams/read_all.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = new Response("Hello from the studio!");
    return resp;
  },
  async PUT(req, ctx) {
    const decoder = new TextDecoder("utf-8");
    if(req.body == null) {
      return new Response("no body", { status: 400 });
    }
    
    const json = await req.json()
    const path = json.path.replace(/file:\/\/\//g, "")
    console.log(path)

    const file = await Deno.readTextFile(path)
    // insert the code in the next line of <Studio>
    const code = "<button>Hello </button>\n{/* insert here */}"
    const newFile = file.replace("{/* insert here */}", code)
    await Deno.writeTextFile(path, newFile)

    const resp = new Response(JSON.stringify({message: "success"}));
    return resp;
  },  
  async POST(req, ctx): Promise<Response> {
    const form = await req.formData();
    const text = form.get("username");
    if (typeof text !== "string") {
      return new Response("misformed form", { status: 400 });
    }
    return Response.redirect(req.url, 303);
  },  
};
