<template>
    <div id="app">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "App.vue",
        data() {
            return {
                text: 'Hello World'
            }
        }
    }
</script>

<style>
    #app {
        color: red;
    }
</style>
