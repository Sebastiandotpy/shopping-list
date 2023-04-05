const form = document.querySelector('form');
const shoppingList = document.querySelector('#shopping-list');
const button = document.querySelector('button[type="submit"]');
const itemInput = document.querySelector('#item-input');
const amountInput = document.querySelector('#amount-input');
const weightInput = document.querySelector('#weight-input');
const costInput = document.querySelector('#cost-input');

button.addEventListener('click', function(event) {
  event.preventDefault();
  addItem();
});

function addItem() {
  const li = document.createElement('li');
  const item = document.createElement('span');
  const amount = document.createElement('span');
  const weight = document.createElement('span');
  const cost = document.createElement('span');
  const deleteButton = document.createElement('button');

  item.innerText = itemInput.value;
  amount.innerText = amountInput.value;
  weight.innerText = weightInput.value;
  cost.innerText = costInput.value;

  deleteButton.innerText = 'Delete';

  li.appendChild(item);
  li.appendChild(amount);
  li.appendChild(weight);
  li.appendChild(cost);
  li.appendChild(deleteButton);
  shoppingList.appendChild(li);

  itemInput.value = '';
  amountInput.value = '';
  weightInput.value = '';
  costInput.value = '';

  deleteButton.addEventListener('click', function(event) {
    li.remove();
  });
}