<template>
    <div class="form">
        <form @submit="onSubmit">
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
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ToDoForm',
    data: () => {
        return {
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