import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { Hono } from 'hono'
import authors from './authors'
import books from './books'
import { handle } from 'hono/vercel'
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = 'edge';

const app = new Hono().basePath('/api')

app.route("/authors", authors);
app.route("/books", books);

export const GET = handle(app)
export const POST = handle(app)