<template>
    <div v-if="!showForm" class="container py-2 m-0">
        <Button btnLabel="Create Task" classes="btn btn-primary m-1" eventString="toggle-form"
            @toggle-form="showForm = !showForm" />
    </div>
    <div v-else class="container py-2 m-0">
        <div class="mx-1">
            <h3>Create Task</h3>
        </div>
        <form @submit.prevent="onSubmit" class="w-50">
            <div class="mb-3 mx-1">
                <label for="task-name" class="form-label">Task</label>
                <input type="text" class="form-control" v-model="formTask">
            </div>
            <div class="d-flex justify-content-between mb-2">
                <div class="d-flex flex-column w-50 mx-1">
                    <label for="priority" class="form-label">Priority</label>
                    <select name="priority" id="priority" class="form-select" v-model="formPriority">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div class="d-flex flex-column w-50 mx-1">
                    <label for="status" class="form-label">Status</label>
                    <select name="status" id="status" class="form-select" v-model="formStatus">
                        <option value="todo">To Do</option>
                        <option value="progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
            </div>
            <div class="d-flex w-25">
                <Button btnLabel="Create" classes="btn btn-primary m-1" @click="onSubmit" />
                <Button btnLabel="Cancel" classes="btn btn-secondary m-1" eventString="toggle-form"
                    @toggle-form="showForm = !showForm" @click="clearForm" />
            </div>
        </form>
    </div>
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
        },
        clearForm() {
            this.formTask = '';
            this.formPriority = '';
            this.formStatus = '';
        }
    }
}</script>

<style scoped>
</style>