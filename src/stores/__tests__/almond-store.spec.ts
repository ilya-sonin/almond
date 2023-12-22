import { describe, it, beforeEach, expect } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { useAlmondStore } from "../almond-store"

describe("Almond store test", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it("create and remove almond", () => {
        const almondStore = useAlmondStore()

        expect(almondStore.create("/path/to/image")).toBe(1)

        almondStore.remove(0)
        expect(almondStore.almonds.length).toBe(0)
    })
})