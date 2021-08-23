import React from "react";
import { Story, Meta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import {List, ListItem, ListItemText} from '../components/List/List'
import { Button } from "../components/Button/Button";
import {AiFillCaretDown} from 'react-icons/ai'
 
import { DropDown as DropDownComponent, DropDownProp } from "../components/Dropdown/DropDown";

export default {
	title: "Components/DropDown",
	component: DropDownComponent,
	decorators: [withDesign],
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const DropDownTemplate: Story<DropDownProp> = (args) => (
	<DropDownComponent {...args} />
);

export const DropDown = DropDownTemplate.bind({});
DropDown.args = {
	content: (
			<List>
				<ListItem hoverEffect>
					<ListItemText primary="option1"/>
				</ListItem>
				<ListItem hoverEffect>
					<ListItemText primary="option2"/>
				</ListItem>
				<ListItem hoverEffect>
					<ListItemText primary="option3"/>
				</ListItem>
				<ListItem hoverEffect>
					<ListItemText primary="option4"/>
				</ListItem>
			</List>
	),
	children: <h4 style={{ bottom:"0"}}>Click Here</h4>
};

export const DropDownButton = DropDownTemplate.bind({});
DropDownButton.args = {
	content: (
			<List>
				<ListItem hoverEffect>
					<ListItemText primary="Bangalore"/>
				</ListItem>
				<ListItem hoverEffect>
					<ListItemText primary="Mumbai"/>
				</ListItem>
				<ListItem hoverEffect>
					<ListItemText primary="Chennai"/>
				</ListItem>
				<ListItem hoverEffect>
					<ListItemText primary="Trivandrum"/>
				</ListItem>
			</List>
	),
	children: <Button label="Places" variant="light" endIcon={<AiFillCaretDown />}/>,
};
