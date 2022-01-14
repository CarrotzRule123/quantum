import { Gate, GateType } from "../types.ts";

export class ZGate implements Gate {
    type: GateType.ZGate

    constructor() {
        this.type = GateType.ZGate
    }
}