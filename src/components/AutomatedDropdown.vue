<template>
    <button @click="toggle">Open Dropdown</button>
    <Transition>
        <ul class="dropdown" v-if="isOpen" v-click-outside="toggle">
            <li class="dropdown__item" v-for="item in props.items" @click="() => handleActionClick(item.actionData)">
                {{ item.content }}
            </li>
        </ul>
    </Transition>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { vClickOutside } from '../directives/clickOutside';

const props = defineProps<{ items: { content: string, actionData: string }[] }>()

const isOpen = ref(false)

const toggle = () => isOpen.value = !isOpen.value

const handleActionClick = (message: string) => alert(message)

</script>

<style lang="scss" scoped>
.dropdown {
    border-radius: 8px;
    padding: 8px;
    list-style: none;
    background-color: #333;

    &__item {
        border-radius: 4px;
        padding: 4px 8px;
        cursor: pointer;

        &:hover {
            background-color: #666;

        }
    }
}

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