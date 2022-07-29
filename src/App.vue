<template>
    <nav class="navbar navbar-expand-xxl bg-primary">
        <Header />
    </nav>
    <div class="d-flex flex-column">
        <div class="d-flex justify-content-end">
            <button>Add Task</button>
            <!-- <ToDoForm @submit-task="submitTask" /> -->
        </div>
        <div class="d-flex justify-content-evenly">
            <ToDoList :taskList="toDoObj.tasks" :label="toDoObj.label" />
            <ToDoList :taskList="inProgressObj.tasks" :label="inProgressObj.label" />
            <ToDoList :taskList="doneObj.tasks" :label="doneObj.label" />
        </div>
    </div>
</template>

<script>
import { get, post } from 'axios';
import Header from './components/Header.vue';
import ToDoList from './components/ToDoList.vue';
import ToDoForm from './components/ToDoForm.vue';
import { GET_TASKS_URL, POST_TASKS_URL } from './helpers/apiRoutes';

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
            toDoObj: { label: 'To Do', tasks: [] },
            inProgressObj: { label: 'In Progress', tasks: [] },
            doneObj: { label: 'Done', tasks: [] }
        }
    },
    async mounted() {
        // get tasks from server and assign to component's data
        this.getTasks(this.tasks);
    },
    methods: {
        // gets all tasks from server
        async getTasks(taskArr) {
            const getTasksResponse = await get(GET_TASKS_URL);
            taskArr = [...getTasksResponse.data.payload];
            this.toDoObj.tasks = this.filterTasks(taskArr, 'todo');
            this.inProgressObj.tasks = this.filterTasks(taskArr, 'progress');
            this.doneObj.tasks = this.filterTasks(taskArr, 'done');
        },
        // handle submit
        async submitTask(task) {
            const postTaskResponse = await post(POST_TASKS_URL, task);
            // refetch data
            if (postTaskResponse.data.success)
                this.getTasks(this.tasks);
            else {
                // need to handle failed post
            }
        },
        // helper function - filters tasks by status
        filterTasks: (taskArr, type) => {
            return taskArr.filter((task) => task.status === type);
        }
    }
}
</script>

<style scoped>
</style>