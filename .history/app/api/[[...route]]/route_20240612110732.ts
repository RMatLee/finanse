import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge';

const app = new Hono().basePath('/api')

app
    .get('/hello', (c) => {
        return c.json({
            message: 'Hello Next.js!',
        })
    })
    .get("/hello/:test", (c) =>{    
        return c.json({
            message: "Hello World",
        })
    .post(
        "/",
        zValidator("json", z.object({
            name: z.string(),
            userId: z.string()
        })),
        (c) => {
            const {} = c.req.valid("json");
        
            return c.json({});
    })

  })

export const GET = handle(app)
export const POST = handle(app)