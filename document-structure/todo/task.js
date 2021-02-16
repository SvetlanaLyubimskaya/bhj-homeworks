// Необходимо написать простой планировщик дел. 
// В данной версии все дела теряются после обновления страницы
// При нажатии на элемент с классом task__remove, задача должна удаляться

/* Процесс реализации
Реализуйте добавление задач по нажатию клавиши Enter при наличии текста в поле ввода
Реализуйте механизм удаления задач
Важный момент: в задании для кнопок удаления задач 
для каждой кнопки должен быть только один обработчик события. 
Тоесть не должно быть более одного обработчика. 
Для этого добавляйте слушатель события только на добавляемый элемент.
*/
const tasks = document.getElementById('tasks');
const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');

const tasksList = document.getElementById('tasks__list');
// const taskRemove = document.querySelector('.task__remove');

function addTask() {

    if (taskInput.value.trim() != '' ) {

        // вставляем разметку task__remove
        tasksList.insertAdjacentHTML('afterbegin', ` 
        <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`)
    }

    taskInput.value = "";

    tasksList.querySelector('.task__remove').addEventListener('click', (event) => {
        event.target.closest('.task').remove();
        event.preventDefault();
    })
}

tasksAdd.onclick = addTask;

tasks.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        
        addTask();
        
        event.preventDefault();
    }
})
