<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
               @change="$emit('change',$event)"
               @input="$emit('input', $event)"
               @focus="$emit('focus', $event)"
               @blur="$emit('blur', $event)">
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'

    export default {
        components: {Icon},
        name: "YixinInput",
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 12px;
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #f1453d;
    .wrapper {
        display: inline-flex;
        font-size: $font-size;
        align-items: center;

        > :not(:last-child) {
            margin-right: .5em;
        }

        > input {
            padding: 0 8px;
            height: $height;
            font-size: inherit;
            border: 1px solid $border-color;
            border-radius: 4px;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readonly] {
                color: #bbb;
                border-color: #bbb;
                cursor: not-allowed;
            }
        }

        &.error {
            > input {
                border-color: $red;
            }
        }

        .icon-error {
            fill: $red;
        }

        .errorMessage {
            color: $red;
        }
    }
</style>