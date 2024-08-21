<script setup lang="ts">
import Form from './components/Form.vue';
import FormWithInput from './components/FormWithInput.vue';
</script>

<template>
    <h1>Vue Practice</h1>
    <div class="wrapper">
        <div class="wrapper__item">
            <h2>Form</h2>
            <Form />
        </div>
        <div class="wrapper__item">
            <h2>Form With Input Component</h2>
            <FormWithInput />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    gap: 2rem;
}
</style>
