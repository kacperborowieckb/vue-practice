<template>
    <input :class="className" type="text" :placeholder="placeholder" v-model="model" />
</template>


<script setup lang="ts">

const model = defineModel<string>({ required: true });
const { placeholder, className } = defineProps<{ placeholder: string, className: string }>()

</script>

<style lang="scss"></style>