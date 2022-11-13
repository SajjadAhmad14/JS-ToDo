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
      const index = box.nextElementSibling.textContent;
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
        grandNode.remove();
        let ind = grandNode.firstElementChild.lastElementChild.innerText;
        ind = Number(ind);
        let list = getListFromStorage();
        list = list.filter((ele) => {
          return ele.index != ind;
        });
        list.forEach(elem => {
          elem.index = list.indexOf(elem) + 1;
        })
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
      updatedList.forEach(elem => {
        elem.index = updatedList.indexOf(elem) + 1;
      })
      storeListToStorage(updatedList);
      location.reload();
    });
  }
};

clearAllBtn();

export { updateStatus, deleteItem };
