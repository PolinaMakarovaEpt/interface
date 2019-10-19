const addButton = document.getElementById('add');
const inputTask = document.getElementById('new-task');
const unfinishedTasks = document.getElementById('unfinished-tasks');

const createListItem = (text, finished = false) => {
    const listItem = document.createElement('li');

    if (finished) {
        listItem.classList.add('finished-tasks');
        listItem.style.setProperty("text-decoration", "line-through");
    }

    const checkbox = document.createElement('button');

    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = `<i class='material-icons'>${finished ? 'check_box' : 'check_box_outline_blank'}</i>`;

    const span = document.createElement('span');

    span.innerText = text;

    const deleteButton = document.createElement('button');

    deleteButton.className = "material-icons delete";
    deleteButton.innerHTML = "<i class='material-icons'>delete</i>";

    const hrLi = document.createElement('hr');

    hrLi.className = "hr-li";

    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    listItem.appendChild(hrLi);

    return listItem;
};

const addTask = () => {
    if (inputTask.value) {
        const listItem = createListItem(inputTask.value);

        unfinishedTasks.appendChild(listItem);
        bindTaskEvents(listItem, finishTask);
        inputTask.value = '';
    }

    save();
};

const deleteTask = (e) => {
    const listItem = e.currentTarget.parentNode;
    const ul = listItem.parentNode;

    ul.removeChild(listItem);
    save();
};

const finishTask = (e) => {
    const listItem = e.currentTarget.parentNode;
    const checkbox = listItem.querySelector('button.checkbox');
    const span = listItem.querySelector('span');

    listItem.style.setProperty("text-decoration", "line-through");
    listItem.className = "finished-tasks";
    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = "<i class = 'material-icons'>check_box</i>";

    bindTaskEvents(listItem, unfinishTask);
    save();
};

const unfinishTask = (e) => {
    const listItem = e.currentTarget.parentNode;
    const checkbox = listItem.querySelector('button.checkbox');

    listItem.style.setProperty("text-decoration", "none");
    listItem.className = "unfinished-tasks";
    checkbox.className = "material-icons checkbox";
    checkbox.innerHTML = "<i class = 'material-icons'>check_box_outline_blank</i>";

    bindTaskEvents(listItem, finishTask);
    save();
};

const bindTaskEvents = (listItem, checkboxEvent) => {
    const checkbox = listItem.querySelector('button.checkbox');
    const deleteButton = listItem.querySelector('button.delete');
    const span = listItem.querySelector('span')

    checkbox.onclick = checkboxEvent;
    deleteButton.onclick = deleteTask;
    span.onclick = checkboxEvent;
};

const save = () => {
    const tasks = [];

    for (let i = 0; i < unfinishedTasks.children.length; i++) {
        const listItem = unfinishedTasks.children[i];

        tasks.push({
            position: i,
            text: listItem.getElementsByTagName('span')[0].innerText,
            finished: listItem.classList.contains('finished-tasks')
        });
    }

    localStorage.removeItem('todo')
    localStorage.setItem('todo', JSON.stringify({
        tasks: tasks
    }));
};

const loadData = () => {
    return JSON.parse(localStorage.getItem('todo'));
};

const prepareList = () => {
    if (data = loadData()) {
        (data.tasks || []).forEach((item) => {
            const listItem = createListItem(item.text, item.finished);

            unfinishedTasks.appendChild(listItem);
            bindTaskEvents(listItem, item.finished ? unfinishTask : finishTask);
        });
    }
}

prepareList();
addButton.onclick = addTask;
