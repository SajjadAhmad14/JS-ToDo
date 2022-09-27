import "./style.css";

const list = [
  {
    description: "play",
    index: 3,
    completed: true,
  },
  {
    description: "eat",
    index: 1,
    completed: true,
  },
  {
    description: "drink",
    index: 2,
    completed: false,
  },
  {
    description: "fast",
    index: 0,
    completed: false,
  },
];

const populateList = () => {
  const itemsList = document.querySelector(".todo");
  list.sort((a, b) => {
    return a.index - b.index;
  });

  list.map((item) => {
    const singleItem = document.createElement("div");
    singleItem.classList.add("item");
    singleItem.innerText = item.description + item.index + item.completed;
    itemsList.appendChild(singleItem);
  });
};

populateList();
