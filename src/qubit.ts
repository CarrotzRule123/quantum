import { Gate } from "./types.ts";

export class Qubit {
    gates: Gate[]

    constructor() {
        this.gates = []
    }
}