<template>
    <div class="container vh-100">
        <h1 class="fs-2">{{ label }}</h1>
        <div class="mb-3" v-for="task in taskList">
            <Task :taskItem="task" @edit-task="handleEdit" />
        </div>
    </div>
</template>

<script>
import Task from './Task.vue';

export default {
    name: 'ToDoList',
    components: {
        Task,
    },
    props: {
        taskList: Array,
        label: String
    },
    methods: {
        handleEdit(task) {
            this.$emit('edit-task', task);
        }
    }
}
</script>

<style scoped>
</style>