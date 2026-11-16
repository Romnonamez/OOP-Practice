export class Task
{
    constructor(text, category, completed)
    {
        this.text = text;
        this.category = category;
        this.completed = completed;
    }

    Render(parent)
    {
        const card = document.createElement('article');
        card.className = 'task-card';

        const text = document.createElement('p');
        text.className = 'task-card__text';
        text.textContent = this.text;

        const category = document.createElement('p');
        category.className = 'task-card__category';
        category.textContent = `Categoría: ${this.category}`;

        const completeButton = document.createElement('button');
        completeButton.type = 'button';
        completeButton.textContent = 'Completar';
        completeButton.disabled = this.completed;

        const updateCompletionState = () => {
            if (this.completed)
            {
                text.classList.add('task-card__text--completed');
                completeButton.disabled = true;
                return;
            }

            text.classList.remove('task-card__text--completed');
            completeButton.disabled = false;
        };

        completeButton.addEventListener('click', () => {
            this.completed = true;
            updateCompletionState();
        });

        updateCompletionState();
        card.append(text, category, completeButton);
        parent.appendChild(card);
    }
}
