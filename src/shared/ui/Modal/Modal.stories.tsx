import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eaque eius eligendi eum molestias, mollitia nihil provident ratione similique sunt suscipit unde vero! Consequuntur culpa deserunt id pariatur rem voluptates!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eaque eius eligendi eum molestias, mollitia nihil provident ratione similique sunt suscipit unde vero! Consequuntur culpa deserunt id pariatur rem voluptates!',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
