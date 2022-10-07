const updateStatus = () => {
  const boxes = document.querySelectorAll(".check");
  boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      if (e.target.checked) {
        console.log("checked");
      } else {
        console.log("Unchecked");
      }
    });
  });
};

updateStatus();
