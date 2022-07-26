<template>
    <div class="container">
        <Header />
    </div>
    <div class="content-container">
        <ToDoForm />
        <div class="task-container">
            <ToDoList :taskList="tasks" />
            <ToDoList :taskList="tasks" />
            <ToDoList :taskList="tasks" />
        </div>
    </div>
</template>

<script>
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
            tasks: []
        }
    },
    mounted() {
        this.tasks =
            [
                { id: 1, task: 'Buy milk', priority: 'high', status: 'todo' },
                { id: 2, task: 'Wash car', priority: 'high', status: 'progress' },
                { id: 3, task: 'Cook dinner', priority: 'high', status: 'done' }
            ]
    }
}
</script>

<style scoped>
.task-container {
    display: flex;
    justify-content: space-evenly;
}
</style>
