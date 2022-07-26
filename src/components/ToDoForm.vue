<template>
    <div class="form">
        <form>
            <label for="task-name">
                <input type="text">
            </label>
            <label for="priority">
                <select name="" id="">
                    <option value=""></option>
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
    name: 'ToDoForm'
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