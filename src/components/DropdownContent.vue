<template>
    <ul class="dropdown-content" v-click-outside="props.close">
        <slot />
    </ul>
</template>

<script setup lang="ts">

import { vClickOutside } from '../directives/clickOutside'

const props = defineProps<{ close: () => void }>()

</script>

<style lang="scss" scoped>
.dropdown-content {
    border-radius: 8px;
    padding: 8px;
    list-style: none;
    background-color: #333;
}
</style>