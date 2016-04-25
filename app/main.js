/**
 * Created by jbmac01 on 16/4/23.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var MessageBoard = require('../component/BlackBoard.js');

require('./boardStyle.css');
require('./logo.png');

ReactDOM.render(<MessageBoard />,
    document.getElementById('container')
)