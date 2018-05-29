<style>

#app {
}

</style>

<template>

<div id="app">
    <router-link to="/otherHello"><el-button type="primary" round>go to model page</el-button></router-link>
    <router-link to="/"><el-button type="success">go to index</el-button></router-link>
    <router-view/>
</div>

</template>

<script>

export default {
    name: 'App'
}

</script>
