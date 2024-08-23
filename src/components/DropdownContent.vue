<script setup lang="ts">

import { default as vClickOutside } from '../directives/clickOutside'

const { close } = defineProps<{ close: () => void }>()

</script>

<template>
    <ul class="dropdown-content" v-click-outside="close">
        <slot />
    </ul>
</template>

<style lang="scss" scoped>
.dropdown-content {
    border-radius: 8px;
    padding: 8px;
    list-style: none;
    background-color: #333;
}
</style>