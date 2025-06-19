const exchangeRate = 26; 

for (let i = 10; i <= 100; i += 10) {
  const costInUAH = i * exchangeRate;
  console.log(`${i} dollars = ${costInUAH} hryvnias`);
}