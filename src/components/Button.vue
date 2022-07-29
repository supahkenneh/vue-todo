<template>
    <div class="container my-2">
        <button type="button" class="btn btn-primary" @click="$emit(eventString)">{{ btnLabel }}</button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        btnLabel: String,
        eventString: String
    }
}
</script>

<style scoped>
</style>