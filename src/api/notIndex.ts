import { ponder } from "@/generated";
import { loggerMiddleware } from "./logMiddleware";


ponder.use(loggerMiddleware);
ponder.get("/notIndexTest", (c) => {
    return c.json({ message: "Ayy lmao!" });
})