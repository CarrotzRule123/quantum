export interface Gate extends Instruction {
    // type: GateType
}

export enum InstructionType {
    XGate,
    HGate,
    ZGate,
    Measure
}

export interface Instruction {
    type: InstructionType
}