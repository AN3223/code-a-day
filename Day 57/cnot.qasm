include "qelib1.inc";
qreg q[5];
creg c[5];

x q[1];
// Set q[1] to |1>

cx q[1],q[0];
// CNOT flips q[0]

measure q[0] -> c[0];
measure q[1] -> c[1];
// 11
