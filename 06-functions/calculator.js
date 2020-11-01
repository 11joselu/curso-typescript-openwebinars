const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero is undefined');
  }

  return a / b;
};

const multiply = (a, b) => {
  return a * b;
};

/**
 * Should define Actions[] types
 * defaultValue is optional
 */
const ACTIONS = [
  {
    name: 'ADD',
    do: add,
  },
  {
    name: 'SUBTRACT',
    do: subtract,
  },
  {
    name: 'DIVIDE',
    do: divide,
  },
  {
    name: 'MULTIPLY',
    do: multiply,
  },
];

function updateUserMoneyText(element, actualMoney) {
  element.innerHTML = actualMoney;
}

function randomNumber(max) {
  return Math.round(Math.random() * max);
}

function playTheGame({ actions, totalClick, onError, onSuccess, userMoney }) {
  const randomIndex = randomNumber(actions.length);
  const A_MILLION = 1000000;
  const action = actions[randomIndex];

  if (!action) {
    onError(randomIndex, actions);
    return userMoney;
  }

  if (userMoney >= A_MILLION) {
    if (typeof onSuccess === 'function') {
      onSuccess(totalClick);
    }

    return userMoney;
  }

  if (userMoney <= 0) {
    throw new Error('Money must be positive');
  }

  const newMoney = Math.round(action.do(userMoney, randomNumber(actions.length * 100)));

  return newMoney;
}

function disableClickButton($button, handleClick) {
  $button.disabled = true;

  if (typeof handleClick === 'function') {
    $button.removeEventListener('click', handleClick);
  }
}

const $button = document.getElementById('button');
const $userMoneyText = document.getElementById('moneyText');
let userMoney = 1000;
let totalClick = 0;

updateUserMoneyText($userMoneyText, userMoney);

$button.addEventListener('click', function handleClick() {
  totalClick++;

  const params = {
    actions: ACTIONS,
    totalClick,
    userMoney: userMoney,
    onError: function (index, actions) {
      console.log(index, actions);
    },
    onSuccess: function (totalClick) {
      disableClickButton($button, handleClick);
      console.log('Te has convertido en millonario al hacer un total de: ', totalClick, ' clicks');
    },
  };

  userMoney = playTheGame(params);

  updateUserMoneyText($userMoneyText, userMoney);
});
