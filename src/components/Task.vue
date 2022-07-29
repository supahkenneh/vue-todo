<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ taskItem.task }}</h5>
            <div class="card-text">
                <div>Priority:
                    <span class="">{{ taskItem.priority }}</span>
                </div>
            </div>
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