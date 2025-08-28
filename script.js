const getElement = function (id) {
  return document.getElementById(id);
};

document
  .getElementById("emergency-box")
  .addEventListener("click", function (e) {
    const title = e.target.parentNode.parentNode.children[1].innerText;
    const number = e.target.parentNode.parentNode.children[3].innerText;

    //  call button event
    if (e.target.className.includes("call-btn")) {
      const coin = getElement("coin-count").innerText;
      if (coin <= 0) {
        alert("Balance Insufficient");
        return;
      }
      alert(`Emergency service website is calling: ${title}.
     Number: ${number}`);

      const coinRemained = Number(coin) - 20;
      getElement("coin-count").innerText = coinRemained;

      const newCall = document.createElement("div");
    newCall.innerHTML = `<div class="flex justify-between items-center  bg-gray-50 p-3">
      <div><p class = 'font-bold'> ${title} </p><p>${number} </p></div>
      <div><p class = 'font-bold'>${new Date().toLocaleTimeString()} </p></div>
    </div>
    </div>`;
    getElement('history-container').appendChild(newCall);
    }
    
  });

  // copy button event 
  document
  .getElementById("emergency-box")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("copy-btn")) {
      const copy = document.getElementById('copy-count').innerText;
console.log(copy)
      const totalCopy = Number(copy) + 1;
      getElement("copy-count").innerText = totalCopy;
    }
  });

  // heart count

    document
  .getElementById("emergency-box")
  .addEventListener("click", function (e) {
    if (e.target.className.includes("fa-heart")) {
      const heart = document.getElementById('heart-count').innerText;
      const totalHeart = Number(heart) + 1;
      getElement("heart-count").innerText = totalHeart;
    }
  });
  // clear button
  document.getElementById('clear-btn').addEventListener('click',function(e){
    getElement('history-container').innerHTML = '';
  })