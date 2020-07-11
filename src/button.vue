<template>
    <div>
        <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
            <g-icon v-if="icon" :name="icon"></g-icon>
            <div class="content">
                <slot></slot>
            </div>
        </button>
    </div>
</template>

<script>
    export default {
        // props: ['icon', 'iconPosition']
        props: {
            icon: {},
            iconPosition: {
                type: String, // 类型
                default: 'left', // 默认值
                validator(value){ // 接收用户传过来的值进行判断
                   return value === 'left' || value === 'right'
                }
            }
        }
    }
</script>

<style lang="scss">
    .g-button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1em;
        height: var(--button-height);
        font-size: var(--font-size);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background: var(--button-bg);

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
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
    }
</style>