<template>
    <div class="task">
        <div>{{ taskItem.task }}</div>
        <div>Priority: {{ taskItem.priority }}</div>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: { taskItem: Object }
}</script>

<style scoped>
.task {
    height: 10em;
    background-color: #242424;
    margin: 2px auto;
    width: 10em;
}
</style>