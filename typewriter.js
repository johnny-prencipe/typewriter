const sentence = 'Hello there from lighthouse labs!';
let timeout = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    if (char === sentence[sentence.length - 1]) console.log();
  }, timeout);
  timeout += 50;
}
