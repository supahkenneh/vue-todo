<template>
    <div v-if="!showForm">
        <Button btnLabel="Add Task" eventString="toggle-form" @toggle-form="showForm = !showForm" />
    </div>
    <form v-else @submit.prevent="onSubmit" class="">
        <div class="row mb-3">
            <label for="task-name" class="form-label">Task</label>
            <input type="text" class="form-control" v-model="formTask">
        </div>
        <div class="row mb-3">
            <label for="priority" class="form-label">Priority</label>
            <select name="priority" id="priority" class="form-select" v-model="formPriority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
        <div class="row mb-3">
            <label for="status" class="form-label">Status</label>
            <select name="status" id="status" class="form-select" v-model="formStatus">
                <option value="todo">To Do</option>
                <option value="progress">In Progress</option>
                <option value="done">Done</option>
            </select>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-secondary">Close</button>
        </div>
    </form>
</template>

<script>
import Button from './Button.vue';

export default {
    name: 'ToDoForm',
    components: { Button },
    data() {
        return {
            formTask: '',
            formPriority: '',
            formStatus: '',
            showForm: false,
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