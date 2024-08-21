<script setup lang="ts">
import { ref } from 'vue';

type User = { firstName: string, secondName: string }[]

const firstName = ref("")
const secondName = ref("")
const users = ref<User>([])

const handleSubmit = () => {
    users.value.push({ firstName: firstName.value, secondName: secondName.value })
    firstName.value = secondName.value = ''
}
</script>

<template>
    <h1>Vue Practice</h1>
    <div class="wrapper">
        <div class="wrapper__item">
            <h2>Form</h2>
            <form class="form" @submit.prevent="handleSubmit">
                <input class="form__input" type="text" v-model="firstName">
                <input class="form__input" type="text" v-model="secondName">
                <button class="form__button" type="submit">Submit</button>
            </form>
            <ul class="user-list">
                <li class="user-list__item" v-for="user in users">{{ `${user.firstName} ${user.secondName}` }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    gap: 2rem;
}



.form {
    flex-direction: column;
    display: flex;
    gap: 2rem;
}

.user-list {
    text-align: left;
}
</style>
