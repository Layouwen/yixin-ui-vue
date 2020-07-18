<template>
    <div class="tabs-header">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
    export default {
        name: "YixinTabsHead"
    }
</script>

<style lang="scss" scoped>
    .tabs-header {

    }
</style>