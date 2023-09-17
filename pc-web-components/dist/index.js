'use strict';

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Button = function (_a) {
    var children = _a.children, style = _a.style, role = _a.role, buttonProps = __rest(_a, ["children", "style", "role"]);
    var sharedStyles = {
        borderRadius: '4px',
        padding: '6px 8px',
        borderStyle: 'none'
    };
    var primaryButtonStyles = {
        backgroundColor: '#4170dd',
        color: '#fff'
    };
    var secondaryButtonStyles = {
        backgroundColor: '#fff',
        border: 'solid 1px #4170dd',
        color: '#000'
    };
    var defaultStyle = role === 'secondary' ? secondaryButtonStyles : primaryButtonStyles;
    return (React.createElement("button", __assign({ style: __assign(__assign(__assign({}, sharedStyles), defaultStyle), style) }, buttonProps), children));
};

// eslint-disable-next-line
var Input = function (_a) {
    var style = _a.style, inputProps = __rest(_a, ["style"]);
    var defaultStyle = {
        borderRadius: '4px',
        padding: '6px 8px',
        border: 'solid 1px #ddd'
    };
    return React.createElement("input", __assign({ style: __assign(__assign({}, defaultStyle), style) }, inputProps));
};

// eslint-disable-next-line
var Box = function (_a) {
    var children = _a.children, style = _a.style, boxProps = __rest(_a, ["children", "style"]);
    var defaultStyle = {
        margin: 'auto'
    };
    return (React.createElement("div", __assign({ style: __assign(__assign({}, defaultStyle), style) }, boxProps), children));
};

exports.Box = Box;
exports.Button = Button;
exports.Input = Input;
//# sourceMappingURL=index.js.map
