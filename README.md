### Lista de projetos

#### Ref.
https://www.youtube.com/watch?v=61QSKu2u5GU&t=1s

* Canal: Crislaine D'Paula
* Projeto: Projeto Completo | Angular 18 e JsonServer | Lista de tarefas
```
https://www.youtube.com/watch?v=61QSKu2u5GU
```

* criando projeto
ng new ListaDeTarefasAngular

* criando componets

* ng g c components/header
* ng g c components/tasks
* ng g c components/task-item

* ng g s services/tasks

#### Backend
* criar o arquivo
* db.json

* db.json conteúdo
{
    "tasks": [
        {
            "id": "1",
            "tarefa": "Task 1",
            "categoria": "This is the first task.",
            "concluido": false
        },
        {
            "id": "2",
            "tarefa": "Task 2",
            "categoria": "This is the first task 2.",
            "concluido": true
        }
    ]
}
npm i json-server

http://localhost:3000/tasks

#### rodando o projeto
npx json-server db.json
npm start