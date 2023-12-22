import { Almond } from "@/types/almond"
import { defineStore } from "pinia"

export const useAlmondStore = defineStore("almond", {
    state: () => ({
        almonds: [] as Almond[]
    }),
    actions: {
        create(src: string): number {
            return this.almonds.push(new Almond(src))
        },
        remove(index: number): void {
            this.almonds.splice(index, 1)
        }
    }
})

export default useAlmondStore