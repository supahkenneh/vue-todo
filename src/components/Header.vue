<template>
    <header>
        <h1>Vue To-Do</h1>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
header {
    background-color: #121212;
    color: whitesmoke;
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

h1 {
    margin: 5px 10px;
}
</style>