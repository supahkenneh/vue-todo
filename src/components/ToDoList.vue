<template>
    <div class="">
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
</style>