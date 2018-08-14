import React from 'react';

import PrimaryButton from '../Button';
import ButtonLabel from '../ButtonLabel'
import ButtonBase from '@material-ui/core/Button';

import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Primary Button', () => {

    beforeEach(() => {

    })

    test('defualt behavior renders primary button element with primary_button class', () => {
        const component = mount(<PrimaryButton />)

        // expect(component.find('button').hasClass('primary_button')).toBe(true) 

    });

    test('defualt behavior renders ButtonLabel child component', () => {
        const component = mount(<PrimaryButton />)

        expect(component.find(ButtonLabel).length).toBe(1) 
        expect(component.find('.button_label').length).toBe(1) 

    });

    // test('default ripple behaviors have been disabled', () => {
    //     const defaultProps = {
    //         disableRipple: true,
    //         disableTouchRipple: true,
    //         focusRipple: false,
    //     }
    //     const component = mount(<PrimaryButton />)
    //     const componentProps = component.props()
    //     console.log(component.html())

    //     expect(componentProps.disableRipple).toBe(defaultProps.disableRipple)
    //     expect(componentProps.disableTouchRipple).toBe(defaultProps.disableTouchRipple)
    //     expect(componentProps.focusRipple).toBe(defaultProps.focusRipple)

    // })

    test('renders button with label copy', () => {
        const labelCopy = "primary label"
        const component = mount(<PrimaryButton label={labelCopy} />)

        expect(component.find('.button_label').length).toBe(1)
        expect(component.find('.button_label').text()).toBe(labelCopy)

    });

    // test('calls onClick function on click behavior', () => {
    //     const clickListener = jest.fn()
    //     const component = mount(<PrimaryButton onClick={clickListener}/>)

    //     component.simulate('click')

    //     const clickListCount = clickListener.mock.calls.length
    //     expect(clickListCount).toBe(1);

    // });

    test('active=null property renders an idle button', () => {
        const component = mount(<PrimaryButton active={null}/>)
        
        expect(component.find('button.idle.primary_button').length).toBe(1)
        expect(component.find('button.active.primary_button').length).toBe(0)
        expect(component.find('button.disabled.primary_button').length).toBe(0)

    });

    test('active=true property renders an idle button', () => {
        const component = mount(<PrimaryButton active={true}/>)
        
        expect(component.find('button.idle.primary_button').length).toBe(0)
        expect(component.find('button.active.primary_button').length).toBe(1)
        expect(component.find('button.disabled.primary_button').length).toBe(0)

    });


    test('active=true property renders an idle button', () => {
        const component = mount(<PrimaryButton active={false}/>)
        
        expect(component.find('button.idle.primary_button').length).toBe(0)
        expect(component.find('button.active.primary_button').length).toBe(0)
        expect(component.find('button.disabled.primary_button').length).toBe(1)
        

    });

})

