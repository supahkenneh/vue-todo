<template>
    <div class="container">
        <Header />
    </div>
    <div class="content-container">
        <ToDoForm />
        <div class="task-container">
            <ToDoList :taskList="toDo" />
            <ToDoList :taskList="inProgress" />
            <ToDoList :taskList="done" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue';
import ToDoList from './components/ToDoList.vue';
import ToDoForm from './components/ToDoForm.vue';

export default {
    name: 'App',
    components: {
        Header,
        ToDoList,
        ToDoForm,
    },
    data() {
        return {
            tasks: [],
            toDo: [],
            inProgress: [],
            done: []
        }
    },
    async mounted() {
        const response = await axios.get('http://localhost:8080/')
        console.log(response);

        this.tasks =
            [
                // { id: 1, task: 'Buy milk', priority: 2, status: 'todo' },
                // { id: 2, task: 'Wash car', priority: 2, status: 'progress' },
                // { id: 3, task: 'Cook dinner', priority: 2, status: 'done' }
            ];
        this.toDo = this.tasks.filter((task) => task.status === 'todo');
        this.inProgress = this.tasks.filter((task) => task.status === 'progress');
        this.done = this.tasks.filter((task) => task.status === 'done');

    },
    methods: {
        getTasks: () => {
            return axios.get(`http://localhost:8080/`)
        }
    }
}
</script>

<style scoped>
.task-container {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 0.5em;
    height: 100vh;
    padding: 0 1em;
}
</style>