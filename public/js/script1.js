export function includeHTML() {
    let elements = document.querySelectorAll("[include-html]");
    elements.forEach(function (element) {
      let file = element.getAttribute("include-html");
      fetch(file)
        .then(response => response.text())
        .then(data => {
          element.innerHTML = data;
        });
    });
  }

window.onload=includeHTML;