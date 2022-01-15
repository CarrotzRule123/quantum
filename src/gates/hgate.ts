import { Qubit } from "../qubit.ts";
import { Gate, InstructionType } from "../types.ts";

export class HGate implements Gate {
    type: InstructionType.HGate
    qubit: Qubit

    constructor(qubit: Qubit) {
        this.type = InstructionType.HGate
        this.qubit = qubit
    }
}