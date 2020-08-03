const main = document.querySelector('ul');
const input = document.querySelector('#inputarea');
const btn = document.querySelector('#addbtn');

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (input.value != '') {
      addList();
    }
  }
});
btn.addEventListener('click', () => {
  if (input.value != '') {
    addList();
  }
});

function addList() {
  const btnTrashCan = document.createElement('button');
  btnTrashCan.textContent = '🗑️';
  btnTrashCan.className = 'reset';
  btnTrashCan.addEventListener('click', () => {
    btnTrashCan.parentNode.parentNode.removeChild(btnTrashCan.parentNode);
  });
  let li = document.createElement('li');
  li.textContent = `${input.value}`;
  li.append(btnTrashCan);
  main.append(li);
  input.value = '';
  input.focus();
}
