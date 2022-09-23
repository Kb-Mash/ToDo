window.addEventListener('load', () => {
    const form = document.querySelector('#task_form');
    const input = document.querySelector('#task_input');
    const task_container = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task){
            alert('Please fill out task');
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content = document.createElement('div');
        task_content.classList.add('content');

        task_el.appendChild(task_content);

        const content_input = document.createElement('input');
        content_input.classList.add('text');
        content_input.type = 'text';
        content_input.value = task;
        content_input.setAttribute('readonly', 'readonly');

        task_content.appendChild(content_input)

        const task_actions = document.createElement('div');
        task_actions.classList.add('actions');

        task_el.appendChild(task_actions);

        const actions_edit = document.createElement('button');
        actions_edit.classList.add('edit');
        actions_edit.innerHTML = 'Edit';

        const actions_delete = document.createElement('button');
        actions_delete.classList.add('delete');
        actions_delete.innerHTML = 'Delete';

        task_actions.appendChild(actions_edit);
        task_actions.appendChild(actions_delete);

        task_container.appendChild(task_el);

        input.value = '';

        actions_edit.addEventListener('click', () => {
            if (actions_edit.innerText.toLowerCase() == 'edit'){
                content_input.removeAttribute('readonly');
                content_input.focus();
                actions_edit.innerText = 'Save';
            } else {
                content_input.setAttribute('readonly', 'readonly');
                actions_edit.innerText = 'Edit';
            }
        })

        actions_delete.addEventListener('click', () => {
            task_container.removeChild(task_el);
        })
    })
})