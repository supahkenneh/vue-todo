<template>
    <button type="button" :class="classes" @click="$emit(eventString)">{{ btnLabel }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        btnLabel: String,
        eventString: String,
        classes: String
    }
}
</script>

<style scoped>
</style>