import { shallowMount } from '@vue/test-utils';
import Button from '@/components/ui/Button.vue';

import { describe, it, expect } from 'vitest';

describe('Button.vue', () => {
    it('рендерит текст кнопки, если он задан', () => {
        const text = 'Нажми меня';
        const wrapper = shallowMount(Button, {
            props: { text },
        });
        expect(wrapper.text()).toMatch(text);
    });

    it('рендерит иконку кнопки, если она задана', () => {
        const wrapper = shallowMount(Button, {
            props: { icon: 'fa fa-check' },
        });
        expect(wrapper.find('i').classes()).toEqual(['fa', 'fa-check']);
    });

    it('добавляет класс "btn-outline", если outline установлен в true', () => {
        const wrapper = shallowMount(Button, {
            props: { outline: true },
        });
        expect(wrapper.classes()).toContain('btn-outline');
    });

    it('добавляет класс "btn-{type}", если type отличен от "normal"', () => {
        const types = ['neutral', 'primary', 'secondary', 'accent', 'ghost', 'link'];
        types.forEach((type) => {
            const wrapper = shallowMount(Button, {
                props: { type },
            });
            expect(wrapper.classes()).toContain(`btn-${type}`);
        });
    });
});