import React from 'react';
import {Story, Meta} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';
import {Switch, SwitchProps} from '../components/ToggleSwitch/ToggleSwitch';

export default {
	title: "Components/Switch",
	component: Switch,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" }
	}
} as Meta;

const Template: Story<SwitchProps> = (args) =>  <Switch {...args} />; 

export const Rounded = Template.bind({});
Rounded.args = {
	variant:"rounded",
	accent:"primary",
	label:"Primary"
};

export const Rectange = Template.bind({})
Rectange.args = {
	variant:"rectangle",
	accent:"success",
	label:"primary"
}