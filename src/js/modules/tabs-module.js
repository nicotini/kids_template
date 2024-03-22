function TabsVideo() {
  var tabLinks = document.querySelectorAll(".tablinks");
  var tabContent = document.querySelectorAll(".video__row");

  tabLinks.forEach(function (element) {
    element.addEventListener("click", openTabs);
  });

  function openTabs(element) {
    var btnTarget = element.currentTarget;
    var info = btnTarget.dataset.info;
    console.log(document.querySelector("#" + info));

    tabContent.forEach(function (element) {
        element.classList.remove("active");
    });

    tabLinks.forEach(function (element) {
        element.classList.remove("active");
    });

    document.querySelector("#" + info).classList.add("active");
    


    btnTarget.classList.add("active");
  }
}
export default TabsVideo;
