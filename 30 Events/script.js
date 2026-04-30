document.getElementById("images").addEventListener("click", function (e) {
  console.log(e.target.tagName);

  if (e.target.tagName === "IMG") {
      let remove = e.target.parentNode;
        remove.remove();
    }

});
