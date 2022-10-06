const button = document.querySelector('#fetchButton')
const container = document.querySelector('#todo-container')

loadEventListeners()

function loadEventListeners() {
    button.addEventListener('click', getTodos)
}

async function getTodos() {
    try {
        const todos = await fetch('https://test-render-deploy.onrender.com/api/todos')
        const data = await todos.json()
        paintDom(data)
    } catch (error) {
        console.error(error.message)
    }
}

function paintDom(arr) {
    arr.map((obj) => {
        createItem(obj)
    })
}

function createItem(obj) {
    const h1 = document.createElement('h1')
    h1.textContent = obj.description
    h1.className = 'item'
    appendElement(h1)
}

function appendElement(elem) {
    container.appendChild(elem)
}