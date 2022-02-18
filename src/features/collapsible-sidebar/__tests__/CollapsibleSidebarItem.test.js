import { shallow } from 'enzyme';
import React from 'react';

import Tooltip from '../../../components/tooltip';
import CollapsibleSidebarItem from '../CollapsibleSidebarItem';
import CollapsibleSidebarLinkCallout from '../CollapsibleSidebarLinkCallout';

describe('components/core/collapsible-sidebar/CollapsibleSidebarItem', () => {
    const getWrapper = (props = {}) => shallow(<CollapsibleSidebarItem {...props} />);

    test('render first child if expanded', () => {
        const sidebar = getWrapper({
            collapsedElement: (
                <span key="1" className="collapsed">
                    abc
                </span>
            ),
            expandedElement: (
                <span key="1" className="expanded">
                    abc
                </span>
            ),
            expanded: true,
            className: 'foo',
        });

        expect(sidebar.find('.expanded').exists()).toBeTruthy();
    });

    test('render second child if not expanded', () => {
        const sidebar = getWrapper({
            collapsedElement: (
                <span key="1" className="collapsed">
                    abc
                </span>
            ),
            expandedElement: (
                <span key="1" className="expanded">
                    abc
                </span>
            ),
            expanded: false,
            className: 'foo',
        });

        expect(sidebar.find('.collapsed').exists()).toBeTruthy();
    });

    test('should include Tooltip if tooltipMessage is passed', () => {
        const sidebar = getWrapper({
            collapsedElement: (
                <span key="1" className="collapsed">
                    abc
                </span>
            ),
            expandedElement: (
                <span key="1" className="expanded">
                    abc
                </span>
            ),
            expanded: false,
            className: 'foo',
            tooltipMessage: 'foobar',
        });

        expect(sidebar.find(Tooltip).exists()).toBeTruthy();
    });

    test('should render a Callout if passed', () => {
        const sidebar = getWrapper({
            collapsedElement: (
                <span key="1" className="collapsed">
                    abc
                </span>
            ),
            expandedElement: (
                <span key="1" className="expanded">
                    abc
                </span>
            ),
            expanded: false,
            className: 'foo',
            tooltipMessage: 'foobar',
            callout: {
                content: <div className="foo-wrapper" />,
                onClose: jest.fn(),
            },
        });

        expect(sidebar.find(CollapsibleSidebarLinkCallout).exists()).toBeTruthy();
    });
});
