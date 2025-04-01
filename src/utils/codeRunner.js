// Safe code execution utility
export const createCodeRunner = (sandbox = {}) => {
    // Create a new Function constructor with a limited scope
    const createSafeFunction = (code) => {
        // Create a list of allowed global variables and functions
        const allowedGlobals = [
            'console',
            'Math',
            'Date',
            'Array',
            'Object',
            'String',
            'Number',
            'Boolean',
            'RegExp',
            'JSON',
            'Error',
            'Promise',
            'Set',
            'Map',
            'WeakMap',
            'WeakSet',
            'Symbol',
            'Proxy',
            'Reflect',
            'Intl'
        ];

        // Create a proxy to intercept global access
        const globalProxy = new Proxy(sandbox, {
            get: (target, prop) => {
                if (allowedGlobals.includes(prop)) {
                    return window[prop];
                }
                return target[prop];
            },
            set: (target, prop, value) => {
                target[prop] = value;
                return true;
            }
        });

        // Create a new function with the sandboxed scope
        return new Function(...Object.keys(globalProxy), `
            "use strict";
            ${code}
        `).bind(globalProxy);
    };

    return {
        run: (code) => {
            try {
                const safeFunction = createSafeFunction(code);
                return safeFunction();
            } catch (error) {
                console.error('Code execution error:', error);
                throw error;
            }
        }
    };
}; 