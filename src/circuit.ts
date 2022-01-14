import { HGate,  XGate,  ZGate } from "./gates/mod.ts";
import { Qubit } from "./qubit.ts";

export class QuantumCircuit {
    qubits: Qubit[]

    constructor(qubits: number) {
        this.qubits = new Array(qubits)
    }

    x(qubit: number) {
        this.qubits[qubit].gates.push(new XGate())
    }

    z(qubit: number) {
        this.qubits[qubit].gates.push(new ZGate())
    }

    h(qubit: number) {
        this.qubits[qubit].gates.push(new HGate())
    }
}