import { getListFromStorage, storeListToStorage, list } from "./listOps";
import { populateList } from "./populateList";
populateList();
const updateStatus = () => {
  const list = getListFromStorage();
  const boxes = document.querySelectorAll(".check");
  const indexes = document.querySelectorAll(".index");
  const indexList = [];
  for (let i = 0; i < indexes.length - 1; i++) {
    indexList.push(i);
  }
  if (list != null) {
    boxes.forEach((box) => {
      const index = box.parentElement.lastElementChild.textContent;
      box.addEventListener("click", (e) => {
        list.forEach((item) => {
          if (e.target.checked) {
            if (item.index == index) {
              item.completed = true;
            }
          } else {
            if (item.index == index) {
              item.completed = false;
            }
          }
        });
        storeListToStorage(list);
      });
    });
  }
};

const deleteItem = () => {
  const dots = document.querySelectorAll(".dots");
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const currentElem = e.target;
      const parentNode = currentElem.parentElement;
      const del = parentNode.lastElementChild;
      const grandNode = currentElem.parentElement.parentElement;
      grandNode.classList.add("bg-change");
      dot.remove();
      del.setAttribute("id", "show");
      del.addEventListener("click", () => {
        let ind = grandNode.firstElementChild.lastElementChild.textContent;
        ind = Number(ind);
        grandNode.remove();
        let list = getListFromStorage();
        list = list.filter((ele) => {
          return ele.index != ind;
        });
        list.forEach((elem) => {
          elem.index = list.indexOf(elem) + 1;
        });
        storeListToStorage(list);
      });
    });
  });
};

const clearAllBtn = () => {
  if (list != null) {
    let updatedList = [];
    const btn = document.querySelector(".clear-btn");
    btn.addEventListener("click", () => {
      updatedList = getListFromStorage();
      updatedList = updatedList.filter((item) => item.completed == false);
      updatedList.forEach((elem) => {
        elem.index = updatedList.indexOf(elem) + 1;
      });
      storeListToStorage(updatedList);
      location.reload();
    });
  }
};

const editTask = () => {
  let discText = "";
  let index = 0;
  const discs = document.querySelectorAll(".detail");
  discs.forEach((disc) => {
    disc.addEventListener("keydown", (e) => {
      if(e.key === 'Enter') {
        e.preventDefault();
        disc.removeAttribute('contenteditable');
      }
    })
    disc.addEventListener("input", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
      discText = e.target.textContent;
      index = Number(e.target.parentElement.lastElementChild.textContent);
      let updatedList = getListFromStorage();
      updatedList.forEach((task) => {
        if (task.index == index) {
          task.description = discText;
        }
      });
      storeListToStorage(updatedList);
    });
  });
};

clearAllBtn();
editTask();

export { updateStatus, deleteItem };
