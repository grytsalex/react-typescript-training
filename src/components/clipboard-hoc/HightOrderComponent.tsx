// Todo needs to change HOC, so that it accepts a component and returns another component already with the copying functionality
/*
import React, { useCallback, useEffect } from "react";
import ClipboardJS from 'clipboard';

const withDataCopy = (PassedComponent) => props => {
    const { text, selector, } = props
    const initializeClipboardField = useCallback(
        elements => {
            elements.forEach(element: any => {
                const clipboard = new ClipboardJS(element);

                clipboard.on('success', function (e) {
                    e.clearSelection();

                    console.log(`${text}`)
                });
            });
        },
        [],
    );
    useEffect(() => {
        initializeClipboardField([`${selector}`]);
    }, [initializeClipboardField]);

    return <PassedComponent {...props} />
};

export default withDataCopy;
*/