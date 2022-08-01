<template>
    <div class="card w-75">
        <div class="card-body d-flex justify-content-between">
            <div class="d-flex flex-column" v-if="!isEditing">
                <h5 class="card-title">{{ taskItem.task }}</h5>
                <div class="card-text">
                    <div>Priority:
                        <span class="">{{ taskItem.priority }}</span>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column" v-else>
                <form @submit.prevent="toggleEdit('edit')">
                    <label for="task-name" class="form-label">Task</label>
                    <input type="text" class="form-control" v-model="formTask">
                    <label for="task-priority" class="form-label">Priority</label>
                    <select name="priority" id="priority" class="form-select" v-model="formPriority">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </form>
            </div>
            <div class="d-flex w-25 justify-content-end" v-if="!isEditing">
                <div class="mx-1 card-button fs-5" @click="toggleEdit('toggle')">✏️</div>
                <div class="mx-1 card-button fs-5">🗑️</div>
            </div>
            <div v-else class="d-flex w-25 justify-content-evenly">
                <div class="mx-1 card-button fs-5" @click="toggleEdit('edit')">✔️</div>
                <div class="mx-1 card-button fs-5" @click="toggleEdit('cancel')">❌</div>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'Task',
    props: { taskItem: Object },
    data() {
        return {
            isEditing: false,
            formTask: '',
            formPriority: '',
            formStatus: ''
        }
    },
    methods: {
        toggleEdit(action) {
            switch (action) {
                case 'edit':
                    const editTaskObj = {
                        id: this.taskItem.id,
                        task: this.formTask ? this.formTask : this.taskItem.task,
                        priority: this.formPriority ? this.formPriority : this.taskItem.status,
                        status: this.formStatus ? this.formStatus : this.taskItem.status
                    }
                    this.$emit('edit-task', editTaskObj);
                    this.isEditing = !this.isEditing;
                    break;
                case 'toggle':
                    this.formTask = this.taskItem.task;
                    this.formPriority = this.taskItem.priority;
                    this.isEditing = !this.isEditing;
                    break;
                case 'cancel':
                    this.isEditing = !this.isEditing;
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style scoped>
.card-button:hover {
    cursor: pointer;
}
</style>