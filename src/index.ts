import { Hono } from 'hono';
import { cors } from 'hono/cors'
import { trpcServer } from '@hono/trpc-server';
import { appRouter } from './router';

const app = new Hono();

export default app.use(
    '/trpc/*',
    cors({
        origin: '*',
    }),
    trpcServer({ router: appRouter })
);

const server = Bun.serve({port: 3001, fetch: app.fetch});

console.log('Server running at', `http://localhost:${server.port}`);


export type AppRouter = typeof appRouter;
