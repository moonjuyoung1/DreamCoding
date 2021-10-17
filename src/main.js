function getItem() {
  return fetch("data/data.json")
    .then((res) => res.json())
    .then((res) => res.items);
}

function display(items) {
  const container = document.querySelector(".items");
  // const html = items.map((items) => createHtml(items));
  // console.log(html);
  container.innerHTML = items.map((items) => createHtml(items)).join("");
}

function createHtml(items) {
  return `    
  <li class="item">
    <img src="${items.image}" alt="${items.type}" class="thumbNail" />
    <span class="item_description">${items.gender}, ${items.size} size</span>
  </li>`;
}

function onButtonClick(e, items) {
  const dataset = e.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  console.log(key);
  console.log(value);

  if (key === undefined || value === undefined) {
    return;
  } else {
    display(items.filter((items) => items[key] === value));
  }
}

function filterItems(items) {
  const logo = document.querySelector(".logo");
  const filterButton = document.querySelector(".button");
  logo.addEventListener("click", () => display(items));
  filterButton.addEventListener("click", (e) => onButtonClick(e, items));
}

getItem()
  .then((items) => {
    console.log(items);
    display(items);
    filterItems(items);
  })
  .catch(console.log);
