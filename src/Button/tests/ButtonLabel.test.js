import React from 'react';
import ButtonLabel from '../ButtonLabel';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Button Label', () => {

    test('defualt behavior renders primary button element with button_label class', () => {
        const component = shallow(<ButtonLabel label={"testing"} />)
        expect(component.find('h4').hasClass('button_label')).toBe(true)


    });

    test('renders label prop', () => {
        const labelCopy = "button label"
        const component = mount(<ButtonLabel label={labelCopy} />)
        const labelComponent = component.find('h4.button_label').text();

        expect(labelComponent).toBe(labelCopy)

    });


})

