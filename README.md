#1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is:
        #getElementById: Select an Element of Html by id from js file.
        #getElementsByClassName: Select an Element of Html by className from js file.
        #querySelector: Selects the first Element of Html by matching className / id from js file.
        #querySelectorAll: Selects all the Elements of Html by matching className / id from js file.

#2 How do you create and insert a new element into the DOM?
Answer: Create html element in a variabile. set innerHtml value in the element and append it in  html.
        Example is given below:
        
        const newCall = document.createElement("div");
            newCall.innerHTML = `<div class="flex justify-between items-center  bg-gray-50 p-3">
              <div><p class = 'font-bold'> ${title} </p><p>${number} </p></div>
              <div><p class = 'font-bold'>${new Date().toLocaleTimeString()} </p></div>
            </div>
            </div>`;
            getElement('history-container').appendChild(newCall);


#3 What is Event Bubbling and how does it work?
answer:
