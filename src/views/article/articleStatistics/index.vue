<template>
    <div>ArticleList</div>
</template>

<script>
    import myStore from "@/store/myStore";
    export default {
        name: "ArticleList",
        data() {
            return {
                sharedState: myStore.state
            }
        }

    }
</script>

<style scoped>

</style>
