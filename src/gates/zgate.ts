import { Qubit } from "../qubit.ts";
import { Gate, InstructionType } from "../types.ts";

export class ZGate implements Gate {
    type: InstructionType.ZGate
    qubit: Qubit

    constructor(qubit: Qubit) {
        this.type = InstructionType.ZGate
        this.qubit = qubit
    }
}