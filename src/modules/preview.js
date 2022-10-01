import { remove } from 'lodash';
import declaration, { listSection, oneItem } from './declaration';

const preview = () => {
    let activity = [];

    if(localStorage.getItem(TaskList) === null) {
        localStorage.setItem('TaskList', JSON.stringify(activity));
    } else {
        activity = JSON.parse(localStorage.getItem(TaskList));
    }

    const listSection = document.querySelector('.todos-container');
    activity.map((oneItem) => {
        const  = oneItem = {index, description};
        const dynDiv = document.createElement('div');
        dynDiv.className = 'tasks-section';
        const checkBox = document.createElement('input');
        const label = document.createElement('label');
        const editIcon = document.createElement('i');
        editIcon.className = 'editIcon';
        const deletetIcon = document.createElement('i');
        deletetIcon.className = 'delete';
        deletetIcon.style.display = 'none';
        checkBox.type = 'checkbox';
        checkBox.setAttribute('id', index);
        label.innerText = description;

        const editInput = document.createElement('input');
        editInput.value = description;
        editInput.style.display = 'none';
        editInput.addEventListener('Enter', (e) => {
            if(e.key === 'Enter') {
                updateActivity(index, editInput.value);
                editIcon.style.display = 'block';
                deletetIcon.style.display = 'none';
                editInput.style.display = 'none';
                checkBox.style.display = 'block';
                label.style.display = 'block';
            }
        });

        editIcon.addEventListener('click', () => {
            editIcon.style.display = 'none';
            deletetIcon.style.display = 'block';
            editInput.style.display = 'block';
            checkBox.style.display = 'none';
            label.style.display = 'none';
        });

        deletetIcon.addEventListener('click', () => {
            remove(index);
        });

        listSection.appendChild(dynDiv);
        dynDiv.appendChild(checkBox);
        dynDiv.appendChild(label);
        dynDiv.appendChild(editInput);
        dynDiv.appendChild(editIcon);
        dynDiv.appendChild(deletetIcon);
        return oneItem
    });
};
export default preview;