import { HGate,  XGate,  ZGate } from "./gates/mod.ts";
import { Measure } from "./measure.ts";
import { Qubit } from "./qubit.ts";

export class QuantumCircuit {
    qubits: Qubit[]
    cbits: Qubit[]

    constructor(qubits: number, cbits: number = 0) {
        this.qubits = new Array(qubits)
        this.cbits = new Array(cbits)
    }

    x(qidx: number) {
        const qubit = this.qubits[qidx]
        qubit.gates.push(new XGate(qubit))
    }

    z(qidx: number) {
        const qubit = this.qubits[qidx]
        qubit.gates.push(new ZGate(qubit))
    }

    h(qidx: number) {
        const qubit = this.qubits[qidx]
        qubit.gates.push(new HGate(qubit))
    }

    measure(qidx: number, cidx: number) {
        const qubit = this.qubits[qidx]
        const cbit = this.cbits[cidx]
        qubit.gates.push(new Measure(qubit, cbit))
    }
}