<template>
    <input :class="props.className" type="text" :placeholder="props.placeholder" v-model="model" />
</template>


<script setup lang="ts">

const model = defineModel<string>({ required: true });
const props = defineProps<{ placeholder: string, className: string }>()

</script>
