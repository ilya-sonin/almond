import { describe, it, expect } from "vitest"

import { Almond } from "../almond"

describe("Test main almond class", () => {
    it("create a new almond and test his life", async () => {
        const almond = new Almond('/path/to/file', 3000, 300)
        expect(await almond.live()).toBe(300)

        const almondError = new Almond('/path/to/file', 250, 300)
        expect(await almondError.live()).toBe(250)
    })
})