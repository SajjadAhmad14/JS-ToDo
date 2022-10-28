let list = [];
const getListFromStorage = () => {
    return JSON.parse(localStorage.getItem("list"));
  };
  const storeListToStorage = (list) => {
    localStorage.setItem("list", JSON.stringify(list));
  };
list = getListFromStorage();
const enterBtn = document.querySelector(".enter-btn");
const inputField = document.getElementById("description");
const addItemList = () => {
    inputField.addEventListener("keypress", (e) => {
      if (e.key == "Enter") {
        e.preventDefault();
        enterBtn.click();
      }
    });
  enterBtn.addEventListener("click", () => {
    const obj = new Object();
    if(list == null) {
        list = []
    }
    obj.index = list.length;
    obj.description = inputField.value;
    obj.completed = false;
      list.push(obj);
    list.sort((a, b) => {
      return a.index - b.index;
    });
    storeListToStorage(list);
    location.reload();
  });
};
addItemList();

export { getListFromStorage, storeListToStorage, list };
