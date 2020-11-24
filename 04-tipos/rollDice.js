function rollTheDice(userName, maxOfTries) {
  const results = [];
  let MAX_DICE_NUMBER;

  if (!maxOfTries) {
    throw new Error('Max could not be undefined');
  }

  if (typeof maxOfTries === 'string') {
    maxOfTries = parseInt(maxOfTries, 10);
  }

  if (typeof maxOfTries !== 'number') {
    throw new Error('Max should be a number');
  }

  if (!userName) {
    throw new Error('Please enter a user name');
  }

  if (typeof userName !== 'string') {
    throw new Error('Username should be a string, not a: ' + typeof userName);
  }

  MAX_DICE_NUMBER = 6;

  for (let index = 0; index < maxOfTries; index++) {
    const result = Math.ceil(Math.random() * MAX_DICE_NUMBER);

    if (result === MAX_DICE_NUMBER) {
      results.push(`${userName} is a WINNER`);
    } else {
      results.push(`${userName} is a LOSER`);
    }
  }

  return results;
}

const results = rollTheDice('TypeScript', 2);

console.log(results);
