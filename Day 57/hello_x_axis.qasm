include "qelib1.inc";
qreg q[5];
creg c[5];

h q[0];
// Making |+>

h q[0];
measure q[0] -> c[0];
// H |+> = 0

x q[1];
h q[1];
// Making |->

h q[1];
measure q[1] -> c[1];
// H |-> = 1
