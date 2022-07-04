(function (React, ReactDOM) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    const App = () => (React__default["default"].createElement("h1", null, "Hello world!"));
    ReactDOM__default["default"].render(React__default["default"].createElement(App, null), document.getElementById('app'));
    window.addEventListener('load', () => {
        console.log('load');
        navigator.serviceWorker.register('sw.js')
            .then((registration) => console.log('load: service worker registered'))
            .catch(() => console.log('load: service worker registration failed'));
    });

})(React, ReactDOM);
