<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <yx-icon class="icon" v-if="icon && !loading" :name="icon"></yx-icon>
        <yx-icon class="loading icon" v-if="loading" name="loading"></yx-icon>
        <div class="content">
            <slot/>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        name: 'YixinButton',
        components: {
          'yx-icon': Icon,
        },
        // props: ['icon', 'iconPosition']
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String, // 类型
                default: 'left', // 默认值
                validator(value) { // 接收用户传过来的值进行判断
                    return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: #fff;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .g-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 0 1em;
        height: $button-height;
        font-size: $font-size;
        vertical-align: middle;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        background: $button-bg;


        &:hover {
            border-color: $border-color-hover;
        }

        &:active {
            background-color: $button-active-bg;
        }

        &:focus {
            outline: none;
        }

        > .icon {
            order: 1;
            margin-left: 0;
            margin-right: .1em;
        }

        > .content {
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .1em;
                margin-right: 0;
            }

            > .content {
                order: 1;
            }
        }

        > .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>