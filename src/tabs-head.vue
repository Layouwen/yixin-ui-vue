<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "YixinTabsHead",
    }
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-header {
        display: flex;
        justify-content: start;
        align-items: center;
        height: $tab-height;
        border: 1px solid red;

        > .actions-wrapper {
            margin-left: auto;
        }
    }
</style>