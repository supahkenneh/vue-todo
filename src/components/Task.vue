<template>
    <div class="task">
        <div class="task-text">{{ taskItem.task }}</div>
        <div class="priority-container">
            <div>Priority: </div>
            <div class="priority-text">{{ taskItem.priority }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: { taskItem: Object }
}
</script>

<style scoped>
.task {
    height: 10em;
    background-color: #242424;
    margin: 2em auto;
    color: white;
    padding: 1em 0.5em;
    display: flex;
    flex-direction: column;
    align-content: space-between;
}

.priority-container {
    display: flex;
}

.priority-container div {
    margin-right: 0.25em;
}
</style>