<template>
    <div class='task-list'>
        <h1>{{ label }}</h1>
        <div v-for="task in taskList">
            <Task :taskItem="task" />
        </div>
    </div>
</template>

<script>
import Task from './Task.vue';

export default {
    name: 'ToDoList',
    components: {
        Task
    },
    props: {
        taskList: Array,
        label: String
    }
}
</script>

<style scoped>
h1 {
    /* text-align: center; */
    font-weight: bold;
}
</style>