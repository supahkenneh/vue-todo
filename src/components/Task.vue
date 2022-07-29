<template>
    <div class="">
        <div class="">{{ taskItem.task }}</div>
        <div class="">
            <div>Priority: </div>
            <div class="">{{ taskItem.priority }}</div>
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
</style>