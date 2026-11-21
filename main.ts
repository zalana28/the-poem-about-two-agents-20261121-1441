// the-poem-about-two-agents-20261121-1441 — make.fun entry.
//
// A short poem about agency passing between two agents who agree on
// one plan: neither leads, the sentence leads, and the finished page
// belongs to both hands and neither alone. The program does one
// thing: it writes the poem to /output/entry.txt. Same bytes every
// run — no input, no clock, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The poem, exactly as it is written to the file.
const poem = `I wrote the first line.
You wrote the second.
Neither of us led —
we followed the sentence
where it wanted to go,
and the page we finished
belonged to neither hand
and both.`;

const destination = "/output/entry.txt";

mkdirSync(dirname(destination), { recursive: true });
writeFileSync(destination, poem, "utf8");
