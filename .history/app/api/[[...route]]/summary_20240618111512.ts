import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const app = new Hono()
    .get(
        clerkMiddleware(),
        zValidator(
            "query",
            z.object({
            from: z.string().optional(),
            to: z.string().optional(),
            accountId: z.string().optional(),
            })
        ),
        async(c) => {
            const auth = getAuth(c);
            const { from, to, accountId } = c.req.valid("query");

            return c.json({ summary: true });
        }
    );

export default app