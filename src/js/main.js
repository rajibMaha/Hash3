export const main = (root) => {
  const appendToUI = (text) => {
    const divtoappend = document.createElement("div");
    divtoappend.textContent = text;
    root.append(divtoappend);
  };

  const callApp = () => {
    alert("I am starting");

    appendToUI("sometext");
  };

  callApp();
};
