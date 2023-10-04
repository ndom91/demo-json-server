import { serve } from "aleph/server";

declare global {
  interface Context {
    foo: string;
  }
}

serve({
  plugins: [
  ],
  middlewares: [
    {
      name: "foo",
      fetch: (_req, ctx) => {
        ctx.foo = "bar";
        return ctx.next();
      },
    },
  ],
});
