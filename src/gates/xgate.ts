import { Gate, GateType } from "../types.ts";

export class XGate implements Gate {
    type: GateType.XGate

    constructor() {
        this.type = GateType.XGate
    }
}