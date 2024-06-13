import { Hono } from "hono";
import { db } from "@/db/drizzle";

const app = new Hono()
    .get("/", (c) => {
        const data = await db.select({
            id: accounts.id,
            name: accounts.name,
        })

        return c.json({ accounts: [] });
    });

export default app;