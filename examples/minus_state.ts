import { QuantumCircuit } from "../mod.ts";

const qc = new QuantumCircuit(1, 1)
qc.x(0)
qc.h(0)
qc.measure(0, 0)