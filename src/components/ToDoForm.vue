<template>
    <div class="form">
        <form @submit="onSubmit">
            <label for="task-name">
                <input type="text" v-model="formTask">
            </label>
            <label for="priority">
                <select name="priority" id="priority" v-model="formPriority">
                    <option v-for="label in priorityLabels">
                        {{ label }}
                    </option>
                </select>
            </label>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import { priorityLabels } from '../helpers/helpers'
export default {
    name: 'ToDoForm',
    data: () => {
        return {
            priorityLabels,
            formTask: '',
            formPriority: ''
        }
    },
    methods: {
        onSubmit: e => {
            e.preventDefault();
        }
    }
}</script>

<style scoped>
.form {
    width: 50%;
}

.form form {
    display: flex;
    flex-direction: column;
}
</style>