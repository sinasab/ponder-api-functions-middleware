// From https://hono.dev/docs/guides/middleware#custom-middleware
import { createMiddleware } from 'hono/factory'

export const loggerMiddleware = createMiddleware(async (c, next) => {
    console.log(`[${c.req.method}] ${c.req.url}`)
    await next()
})