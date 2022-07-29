<template>
    <div class="">
        <form @submit.prevent="onSubmit">
            <label for="task-name">
                <input type="text" v-model="formTask">
            </label>
            <label for="priority">
                <select name="priority" id="priority" v-model="formPriority">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </label>
            <label for="status">
                <select name="status" id="status" v-model="formStatus">
                    <option value="todo">To Do</option>
                    <option value="progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </label>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ToDoForm',
    data() {
        return {
            formTask: '',
            formPriority: '',
            formStatus: ''
        }
    },
    methods: {
        onSubmit() {
            const taskObj = {
                task: this.formTask,
                priority: this.formPriority,
                status: this.formStatus
            };
            this.$emit('submit-task', taskObj);
        }
    }
}</script>

<style scoped>
</style>