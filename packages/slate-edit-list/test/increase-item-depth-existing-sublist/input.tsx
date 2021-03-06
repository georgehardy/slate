/* @jsx h */

import h from '../hyperscript';

export default (
    <value>
        <document>
            <ul_list>
                <list_item>
                    <paragraph>Item 1</paragraph>
                    <ul_list>
                        <list_item>
                            <paragraph>Item 1.1</paragraph>
                        </list_item>
                    </ul_list>
                </list_item>
                <list_item>
                    <paragraph>
                        <anchor />
                        Item 2<focus />
                    </paragraph>
                </list_item>
            </ul_list>
        </document>
    </value>
);
