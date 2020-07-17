<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "YixinToast"
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        font-size: $font-size;
        color: #fff;
        height: $toast-height;
        line-height: 1.8;
        transform: translateX(-50%);
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
        background: $toast-bg;
    }
</style>