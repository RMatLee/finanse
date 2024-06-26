import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from "@hono/zod-validator";
import { parse, subDays } from "date-fns";
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

            if (!auth?.userId) {
                return c.json({ error: "Unauthorized." }, 401);
              }

            const defaultTo = new Date();
            const defaultFrom = subDays(defaultTo, 30);

            const startDate = from
                ? parse(from, "yyyy-MM-dd", new Date())
                : defaultFrom;
            const endDate = to ? parse(to, "yyyy-MM-dd", new Date()) : defaultTo;

            return c.json({ summary: true });
        }
    );

export default app