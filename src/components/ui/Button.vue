<script setup lang="ts">
export interface Props {
    text?: string,
    icon?: string,
    outline?: boolean,
    type?: 'normal' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link'
}

const props = withDefaults(defineProps<Props>(), {
    text: '',
    icon: '',
    outline: false,
    type: 'normal'
})

function getClasses(): string {
    let classes: string = '';

    if (props.outline == true) {
        classes += 'btn-outline'
    }

    if (props.type !== 'normal') {
        classes += ' btn-' + props.type
    }

    return classes
}
</script>

<template>
    <button class="btn" :class="getClasses()">
        <i v-if="props.icon != null" :class="props.icon"></i>
        <span v-if="props.text != null">{{ props.text }}</span>
    </button>
</template>