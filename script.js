const icon = document.querySelector(".icon");
const shareContainer = document.querySelector(".share-container");
const iconShare = document.querySelector(".icon-share");

icon.addEventListener("click", () => {
  const isActive = shareContainer.classList.contains("active");

  if (!isActive) {
    shareContainer.classList.add("active");
    shareContainer.style.display = "flex";
  } else {
    shareContainer.classList.remove("active");
    shareContainer.style.display = "none";
  }
});

iconShare.addEventListener("click", () => {
  const isActive = shareContainer.classList.contains("active");

  if (!isActive) {
    shareContainer.classList.add("active");
    shareContainer.style.display = "flex";
  } else {
    shareContainer.classList.remove("active");
    shareContainer.style.display = "none";
  }
});
