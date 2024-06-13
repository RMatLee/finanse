import { Hono } from "hono";
import { db } from "@/db/drizzle";
import { accounts, insertAccountSchema } from "@/db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { zValidator } from '@hono/zod-validator'
import { eq } from "drizzle-orm";

const app = new Hono()
    .get("/", clerkMiddleware() , async (c) => {
        const auth = getAuth(c);

        if(!auth?.userId) {
            return c.json({error: "Unauthorized" }, 401);
        }

        const data = await db.select({
            id: accounts.id,
            name: accounts.name,
        })
        .from(accounts)
        .where(eq(accounts.userId, auth.userId));

        return c.json({ data });
    })
    .post(
        "/",
        clerkMiddleware(),
        zValidator("json", insertAccountSchema.pick({
            name: true,
        })),
        async (c) => {
            const auth = getAuth(c);
            const values = c.req.valid("json");

            if(!auth?.userId) {
                return c.json({ error: "Unauthorized"}, 401)
            }

            return c.json({});
        })

export default app;