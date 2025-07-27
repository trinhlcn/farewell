document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("to");

  if (name) {
    const header = document.getElementById("receiverName");
    header.textContent = `Gửi ${decodeURIComponent(name)} thân mến,`;

    const lowerName = name.toLowerCase();
    if (lowerName.includes("anh")) {
      const nameRef1 = document.querySelectorAll(".nameRef");
      const nameRef2 = document.getElementById("nameRef2");
      const paragraph = document.querySelectorAll(".paragraph");

      if (nameRef1){
        nameRef1.forEach(p => {
          p.innerHTML = p.innerHTML.replace(/Trinh/g, "Em");
        });
      }
      if (nameRef2) nameRef2.textContent = "em";
      if (paragraph){
        paragraph.forEach(p => {
          p.innerHTML = p.innerHTML.replace(/bạn/g, "anh");
        });
      }
    }
    else if (lowerName.includes("em")) {
      const nameRef1 = document.querySelectorAll(".nameRef");
      const nameRef2 = document.getElementById("nameRef2");
      const paragraph = document.querySelectorAll(".paragraph");

      if (nameRef1){
        nameRef1.forEach(p => {
          p.innerHTML = p.innerHTML.replace(/Trinh/g, "Chị");
        });
      }
      if (nameRef2) nameRef2.textContent = "chị";
      if (paragraph){
        paragraph.forEach(p => {
          p.innerHTML = p.innerHTML.replace(/bạn/g, "em");
        });
      }
    }
  }
});
