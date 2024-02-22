import { publicProcedure, router } from './trpc';
import { z } from 'zod';
import { db } from './utils/db';

export const appRouter = router({
    hello: publicProcedure.query( async () => {
        try {
            const result = await db.query.note.findMany();
            return result;
        }catch(e) {
            console.log(e);
        }
    }),
});
