<template>
    <div>{{sharedState.message}}</div>
</template>

<script>
    import store from "@/store/store";
    export default {
        data() {
            return {
                sharedState: store.state
            }
        }

    }
</script>

<style scoped>

</style>
