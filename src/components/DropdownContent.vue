<script setup lang="ts">

</script>

<template>
    <ul class="dropdown-content">
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