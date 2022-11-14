import { getListFromStorage } from "./listOps";

const populateList = () => {
  const itemsList = document.querySelector(".todo");
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  const items = getListFromStorage();
  if (items != null) {
    items.map((item) => {
      const listItem = document.createElement("div");
      listItem.classList.add("item");
      listItem.classList.add("border");
      itemsList.classList.add("roboto-font");
      listItem.innerHTML = `
        <div class = "margins item-head">
          <input type = "checkbox" class = "check">        
          <div class = "detail" contentEditable="true">  
            ${item.description}
          </div>
          <div class = "index">
            ${item.index}
          </div>
        </div>
        <div class = "margins">
          <i class="fa-solid fa-ellipsis-vertical dots"></i>
          <i class="fa fa-trash" id = "hide"></i>
        </div>
        `;
      listContainer.appendChild(listItem);
    });
    itemsList.appendChild(listContainer);
    const clearBtn = document.createElement("button");
    clearBtn.classList.add("clear-btn");
    clearBtn.textContent = "Clear all completed";
    itemsList.appendChild(clearBtn);
  }
};

export { populateList };
