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
        Event Bubbling is a process of DOM (Document Object Model) event propagation
        where if an event is triggered on a specific element (e.g. button or div) it first occurs to
        the target element then gradually the process travels through its parent elements,
        grandparent elements and even reaches to its root element.  For example, if you click
        on a nested &lt;div&gt;, the event first triggers on that &lt;div&gt;, then on its parent &lt;div&gt;, and
        then on its grandparent &lt;div&gt;, and so forth. This process is called bubbling because
        while an event is triggered it ascends from target element to all way up to its root
        element like a bubble.
        How Event Bubbling Works
        1. Triggering Event:
        A user action like clicking a button generates an event on a specific element and the
        element is known as the target element. 
        2. Target Phase:
        The event is executed to the target element first. 
        3. Bubbling Phase:
        The event then &quot;bubbles up&quot; the DOM tree, starting from the parent of the target
        element, then its parent&#39;s parent, and so on. 
        4. Root Reached:
        This process continues until the event reaches the top of the DOM tree, typically
        the document or window object.
        
#4. What is Event Delegation in JavaScript? Why is it useful?
        Event delegation is a technique of JavaScript where a single event listener is added to a
        parent element to manage events triggered by its child elements, without adding
        separate event listeners to each child. 
        Why it is useful:
         Better performance:
        Without adding separate event listeners to each child, we can add a single event
        listener to a common ancestor of the elements which will reduce the number of event
        listeners in the DOM resulting lower memory consumption and better performance.
         Simplified Code:
        As single event of a parent element controls the event of all its child, it makes the code
        cleaner, more organized, and easier to maintain.
         Beneficial for Dynamic Element:
        If a new child is added to a parent element, we do not need to add a new event listener
        to the child as the parent already has an event listener and it will automatically work for
        the new child.
         Less Complex:
        We can avoid to manually add and remove event listeners when elements are added or
        removed from the DOM.

        
#5. What is the difference between preventDefault() and stopPropagation()
methods?
        PreventDefault() and stopPropagation() are two important methods of event handler in
        JavaScript. But they are used for different purpose.
        Difference between preventDefault() and stopPropagation() methods:
        preventDefault():
        We can stop default behavior of an event by using preventDefault() method. A default
        behavior is a browser&#39;s built-in behavior for a specific event. For example, preventing a
        form from submitting when a submit button is clicked or preventing a link from
        navigating to its href URL when clicked.
        Example-
        document.getElementById(&#39;form&#39;).addEventListener(&#39;click&#39;, function(e){
        e.preventDefault(); // will prevent default action of form submitting
        });
        stopPropagation():
        This method is used to stop propagation of an event so that it cannot bubble up or
        capture down in the DOM hierarchy. Events in the DOM usually go through three
        phases: capturing, target, and bubbling. stopPropagation() prevents the event from
        moving to subsequent elements in either the capturing or bubbling phase.
        Clicking a child element will not trigger the event to its parent if stopPropagation()
        method is used.
        In a nutshell, preventDefault() method stops the action, while stopPropagation() method
        stops the flow of the action.
