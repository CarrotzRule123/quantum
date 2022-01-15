import { Qubit } from "../qubit.ts";
import { Gate, InstructionType } from "../types.ts";

export class XGate implements Gate {
    type: InstructionType.XGate
    qubit: Qubit

    constructor(qubit: Qubit) {
        this.type = InstructionType.XGate
        this.qubit = qubit
    }
}