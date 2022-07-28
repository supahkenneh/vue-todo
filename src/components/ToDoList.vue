<template>
    <div class='task-list'>
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
        taskList: Array
    }
}
</script>

<style scoped>
.task-list {
}
</style>