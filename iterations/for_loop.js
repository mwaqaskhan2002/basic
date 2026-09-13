// ==========================================
// VIDEO #27: FOR LOOP WITH BREAK & CONTINUE
// ==========================================

// --- Basic For Loop ---
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  // console.log(element);
}

// --- Nested For Loop ---
for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and outer loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j ); // Multiplication tables
  }
}

// --- Loop on Array ---
let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

// --- Break Keyword ---
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Value of i is ${index}`);
}

// --- Continue Keyword ---
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${index}`);
}


// for Loop: Used for fixed iteration cycles with initialization, condition, and increment.

// break: Terminates the loop execution immediately.

// continue: Skips the current iteration and jumps directly to the increment/next cycle.