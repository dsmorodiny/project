import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

export const rowGap4 = Template.bind({});
rowGap4.args = {
    gap: '4',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

export const rowGap8 = Template.bind({});
rowGap8.args = {
    gap: '8',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

export const rowGap16 = Template.bind({});
rowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

export const rowGap32 = Template.bind({});
rowGap32.args = {
    gap: '32',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};

export const columnGap16 = Template.bind({});
columnGap16.args = {
    gap: '16',
    direction: 'column',
    children: (
        <>
            <div>first</div>
            <div>second</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
        </>
    ),
};
