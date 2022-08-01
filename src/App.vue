<template>
    <nav class="navbar navbar-expand-xxl bg-primary">
        <Header />
    </nav>
    <div class="d-flex flex-column">
        <div class="w-100 d-flex">
            <ToDoForm @submit-task="submitTask" />
        </div>
        <div class="d-flex justify-content-evenly">
            <ToDoList :taskList="toDoObj.tasks" :label="toDoObj.label" @edit-task="handleEdit"
                @delete-task="handleDelete" />
            <ToDoList :taskList="inProgressObj.tasks" :label="inProgressObj.label" @edit-task="handleEdit"
                @delete-task="handleDelete" />
            <ToDoList :taskList="doneObj.tasks" :label="doneObj.label" @edit-task="handleEdit"
                @delete-task="handleDelete" />
        </div>
    </div>
</template>

<script>
// import { get, post, put, delete } from 'axios';
import axios from 'axios';
import Header from './components/Header.vue';
import ToDoList from './components/ToDoList.vue';
import ToDoForm from './components/ToDoForm.vue';
import { GET_TASKS_URL, POST_TASKS_URL, PUT_TASKS_URL, DELETE_TASKS_URL } from './helpers/apiRoutes';

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
            doneObj: { label: 'Done', tasks: [] },
        }
    },
    async mounted() {
        // get tasks from server and assign to component's data
        this.tasks = await this.getTasks(this.tasks);
    },
    methods: {
        // gets all tasks from server
        async getTasks(taskArr) {
            const getTasksResponse = await axios({
                method: 'get',
                url: GET_TASKS_URL
            });
            taskArr = [...getTasksResponse.data.payload];
            this.toDoObj.tasks = this.filterTasks(taskArr, 'todo');
            this.inProgressObj.tasks = this.filterTasks(taskArr, 'progress');
            this.doneObj.tasks = this.filterTasks(taskArr, 'done');
            return taskArr;
        },
        // handle submit
        async submitTask(task) {
            const postTaskResponse = await axios({
                method: 'post',
                url: POST_TASKS_URL,
                data: task
            });
            // refetch data
            if (postTaskResponse.data.success)
                this.getTasks(this.tasks);
            else {
                // need to handle failed post
            }
        },
        async handleEdit(task) {
            const editTaskResponse = await axios({
                method: 'put',
                url: `${PUT_TASKS_URL}${task.id}`,
                data: task
            });

            if (editTaskResponse.data.success) {
                this.getTasks(this.tasks);
            } else {

            }
        },
        async handleDelete(id) {
            const deleteTaskResponse = await axios({
                method: 'delete',
                url: `${DELETE_TASKS_URL}${id}`
            });

            if (deleteTaskResponse.data.success) {
                this.getTasks(this.tasks);
            } else {

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