import { randomUUID } from "crypto"
import type { UUID } from "crypto"

import { delay } from "@/common"

export class Almond {
    private _id: UUID // crypto.randomUUID()
    private _src: string
    private _life: number
    private _speed: number

    get id(): UUID { return this._id; }
    get src(): string { return this._src; }
    get life(): number { return this._life; }

    constructor(src: string, life?: number, speed?: number) {
        this._id = randomUUID()

        this._src = src
        this._life = life || 1000
        this._speed = speed || 100
    }

    public async live(): Promise<number> {
        while (this._life > this._speed) {
            this._life -= this._speed
            await delay(this._speed)
        }

        return this._life
    }
}