cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "plugin.socket.io.SocketIO",
        "file": "plugins/plugin.socket.io/www/socketio.js",
        "pluginId": "plugin.socket.io",
        "clobbers": [
            "plugin.socket.io"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "plugin.socket.io": "1.0.0",
    "cordova-plugin-whitelist": "1.3.0"
};
// BOTTOM OF METADATA
});