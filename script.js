var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.height = "4.26rem";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.height = "1rem";
    this.mini = true;
  }
}
