<template>
    <li class="dropdown-item" @click="handleActionClick">
        <slot />
    </li>
</template>

<script setup lang="ts">

const { childNumber } = defineProps<{ childNumber: number }>()
const emit = defineEmits(["action"])

const handleActionClick = () => emit("action", `Message from child nr.${childNumber}`)

</script>


<style lang="scss" scoped>
.dropdown-item {
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;

    &:hover {
        background-color: #666;
    }
}
</style>