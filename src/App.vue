<script setup lang="ts">

import Dropdown from './components/Dropdown.vue';
import DropdownContent from './components/DropdownContent.vue';
import DropdownItem from './components/DropdownItem.vue';
import Form from './components/Form.vue';
import FormWithInput from './components/FormWithInput.vue';

const makeAlert = (message: string) => alert(message)

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
        <div class="wrapper__item">
            <h2>Dropdown</h2>
            <Dropdown>
                <template #toggler>
                    <button>Open Dropdown</button>
                </template>
                <template #content="{ close }">
                    <DropdownContent :close="close">
                        <DropdownItem @action="makeAlert" :child-number="1">Some action</DropdownItem>
                        <DropdownItem @action="makeAlert" :child-number="2">Some action</DropdownItem>
                        <DropdownItem @action="makeAlert" :child-number="3">Some action</DropdownItem>
                    </DropdownContent>
                </template>
            </Dropdown>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    gap: 2rem;
}
</style>
