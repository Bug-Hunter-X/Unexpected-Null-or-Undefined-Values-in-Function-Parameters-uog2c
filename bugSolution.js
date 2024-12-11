function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    // Handle null or undefined values appropriately, for example:
    console.warn('Null or undefined parameter(s) received.');
    return 0; // Or throw an error, or return a default value
  }

  // ... rest of the function ...
  return a + b; // Example operation
}

console.log(foo(5, 3)); // Output: 8
console.log(foo(null, 3)); //Output: Null or undefined parameter(s) received.
                                //         0
console.log(foo(undefined,3)); //Output: Null or undefined parameter(s) received.
                                 //         0