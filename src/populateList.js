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
    const listContainer = document.createElement("div");
    listContainer.classList.add("list-container");
    list.sort((a, b) => {
      return a.index - b.index
    })
    list.map(item => {
      const listItem = document.createElement("div");
      listItem.classList.add("item")
      listItem.classList.add("border");
      itemsList.classList.add("roboto-font");
      listItem.innerHTML = `
      <div class = "margins">
      <input type = "checkbox" class = "check">
      ${item.description}
      </div>
      <div class = "margins">
      <i class="fa fa-refresh" aria-hidden="true"></i>
      </div>
      `
      listContainer.appendChild(listItem)
    })
  
    itemsList.appendChild(listContainer)
  }
  populateList();