<template>
    <form class="form" @submit.prevent="handleSubmit">
        <Input v-model="firstName" class-name="form__input" placeholder="First Name" />
        <Input v-model="secondName" class-name="form__input" placeholder="Second Name" />
        <button class="form__button" type="submit">Submit</button>
    </form>
    <ul class="user-list">
        <li class="user-list__item" v-for="user in users" :key="user.firstName">
            {{ `${user.firstName} ${user.secondName}` }}
        </li>
    </ul>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import Input from './Input.vue';

type User = { firstName: string, secondName: string }[]

const firstName = ref("")
const secondName = ref("")
const users = ref<User>([])

const handleSubmit = () => {
    users.value.push({ firstName: firstName.value, secondName: secondName.value })
    firstName.value = secondName.value = ''
}

</script>

<style lang="scss" scoped>
.form {
    flex-direction: column;
    display: flex;
    gap: 2rem;
}

.user-list {
    text-align: left;
}
</style>
