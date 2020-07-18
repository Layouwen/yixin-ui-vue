<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "YixinTabsItem",
        inject: ['eventBus'],
        data() {
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            name: {
                type: [String, Number],
                required: true
            }
        },
        computed: {
            classes() {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },
        methods: {
            onClick() {
                if (this.disabled) {
                    return
                }
                this.eventBus.$emit('update:selected', this.name, this)
                this.$emit('click', this)
            }
        }
    }
</script>

<style lang="scss" scoped>
    $blue: blue;
    $disabled-text-color: grey;
    .tabs-item {
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1em;
        height: 100%;
        cursor: pointer;

        &.active {
            font-weight: bold;
            color: $blue;
        }

        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>