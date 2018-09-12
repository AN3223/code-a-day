include "qelib1.inc";
qreg q[5];
creg c[5];

x q[3];
z q[3];
measure q[3] -> c[3];
// Does essentially the same as H gate

h q[0];
measure q[0] -> c[0];
