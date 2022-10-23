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

const clearAllBtn = () => {
  if( list != null) {
    const btn = document.querySelector(".clear-btn");
    btn.addEventListener("click", () => {});
  }
};

clearAllBtn();

export { updateStatus };
