let addButton = document.getElementById('add'),
    inputTask = document.getElementById('new-task'),
    unfinishedTasks = document.getElementById('unfinished-tasks'),
    finishedTasks = document.getElementById('finished-tasks');

const createNewElement = (task, finished) => {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('button');
    let divLi = document.createElement('div');

    if (finished) {
        checkbox.className = "material-icons checkbox";
        checkbox.innerHTML = "<i class='material-icons'>check_box</i>";
    }

    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = "<i class='material-icons'>check_box_outline_blank</i>";
    let label = document.createElement('label');
    label.innerText = task;
    let deleteButton = document.createElement('button');
    deleteButton.className = "material-icons delete";
    deleteButton.innerHTML = "<i class='material-icons'>delete</i>";
    divLi.className = "div-li";

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    listItem.appendChild(divLi);

    return listItem;
};

const addTask = () => {
    if (inputTask.value) {
        let listItem = createNewElement(inputTask.value);
        unfinishedTasks.appendChild(listItem);
        bindTaskEvents(listItem, finishTask);
        inputTask.value = '';
    }
    save();
};
addButton.onclick = addTask;

const deleteTask = (e) => {
    let listItem = e.currentTarget.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
    save();
};

const finishTask = (e) => {
    let listItem = e.currentTarget.parentNode;
    let checkbox = listItem.querySelector('button.checkbox');
    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = "<i class = 'material-icons'>check_box</i>";

    finishedTasks.appendChild(listItem);
    bindTaskEvents(listItem, unfinishTask);
    save();
};

const unfinishTask = (e) => {
    let listItem = e.currentTarget.parentNode;
    let checkbox = listItem.querySelector('button.checkbox');
    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = "<i class = 'material-icons'>check_box_outline_blank</i>";

    unfinishedTasks.appendChild(listItem);
    bindTaskEvents(listItem, finishTask);
    save();
};

const bindTaskEvents = (listItem, checkboxEvent) => {
    let checkbox = listItem.querySelector('button.checkbox');
    let deleteButton = listItem.querySelector('button.delete');

    checkbox.onclick = checkboxEvent;
    deleteButton.onclick = deleteTask;
};

const save = () => {
    let unfinishedTasksArr = [];
    let finishedTasksArr = [];

    for (let i = 0; i < unfinishedTasks.children.length; i++) {
        unfinishedTasksArr.push(unfinishedTasks.children[i]
            .getElementsByTagName('label')[0].innerText);
    }

    for (let i = 0; i < finishedTasks.children.length; i++) {
        finishedTasksArr.push(finishedTasks.children[i]
            .getElementsByTagName('label')[0].innerText);
    }

    localStorage.removeItem('todo')
    localStorage.setItem('todo', JSON.stringify({
        unfinishedTasks: unfinishedTasksArr,
        finishedTasks: finishedTasksArr
    }));
};

const load = () => {
    return JSON.parse(localStorage.getItem('todo'));
};

let data = load();
for (let i = 0; i < data.unfinishedTasks.length; i++) {
    let listItem = createNewElement(data.unfinishedTasks[i]);
    unfinishedTasks.appendChild(listItem);
    bindTaskEvents(listItem, finishTask);
}

for (let i = 0; i < data.finishedTasks.length; i++) {
    let listItem = createNewElement(data.finishedTasks[i]);
    finishedTasks.appendChild(listItem);
    bindTaskEvents(listItem, unfinishTask);
}