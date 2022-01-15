import { Cbit } from "./cbit.ts";
import { Qubit } from "./qubit.ts";
import { Instruction, InstructionType } from "./types.ts";

export class Measure implements Instruction {
    type: InstructionType.Measure
    qubit: Qubit
    cbit: Cbit

    constructor(qubit: Qubit, cbit: Cbit) {
        this.type = InstructionType.Measure
        this.qubit = qubit
        this.cbit = cbit
    }
}