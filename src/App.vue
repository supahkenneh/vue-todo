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
import { get } from 'axios';
import Header from './components/Header.vue';
import ToDoList from './components/ToDoList.vue';
import ToDoForm from './components/ToDoForm.vue';
import { GET_TASKS_URL } from './helpers/apiRoutes';

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
        // get tasks from server (async) and assign to component's data.task
        const getTasksResponse = await this.getTasks();
        this.tasks = [...getTasksResponse.data.payload];

        // filter all tasks by status
        this.toDo = this.filterTasks(this.tasks, 'todo');
        this.inProgress = this.filterTasks(this.tasks, 'progress');
        this.done = this.filterTasks(this.tasks, 'done');

    },
    methods: {
        // gets all tasks from server
        getTasks: async () => {
            return get(GET_TASKS_URL)
        },
        // helper function - filters tasks by status
        filterTasks: (taskArr, type) => {
            return taskArr.filter((task) => task.status === type);
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