import './style.css';

const list = [
  {
    description: "play",
    index: 0,
    completed: true
  },
  {
    description: "eat",
    index: 1,
    completed: true
  },
  {
    description: "drink",
    index: 2,
    completed: false
  }
]


const populateList = () => {
  const todo = document.querySelector(".todo");
  todo.innerText = list[0].description;
}

populateList();