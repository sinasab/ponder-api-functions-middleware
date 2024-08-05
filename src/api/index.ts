import { ponder } from "@/generated";
import { loggerMiddleware } from "./logMiddleware";


ponder.use(loggerMiddleware);
ponder.get("/indexTest", (c) => {
    return c.json({ message: "Hello, World!" });
})