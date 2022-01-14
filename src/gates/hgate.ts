import { Gate, GateType } from "../types.ts";

export class HGate implements Gate {
    type: GateType.HGate

    constructor() {
        this.type = GateType.HGate
    }
}