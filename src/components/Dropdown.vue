<template>
    <div @click="toggle">
        <slot name="toggler" />
    </div>
    <Transition>
        <slot v-if="isOpen" :close="toggle" name="content" />
    </Transition>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const isOpen = ref(false)

const toggle = () => isOpen.value = !isOpen.value

</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.2s ease-out;
}

.v-enter-from,
.v-leave-to {
    transform: translateY(4px);
    opacity: 0;
}
</style>