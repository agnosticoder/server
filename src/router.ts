import { publicProcedure, router } from './trpc';
import { z } from 'zod';
import { db } from './utils/db';

// export const appRouter = router({
//     hello: publicProcedure.query(() => {
//         return `Hello World!`;
//     }),
// });

export const appRouter = router({
    hello: publicProcedure.query( async () => {
        try {
            const result = await db.query.comment.findMany();
            return result;
        }catch(e) {
            console.log(e);
        }
    }),
});
