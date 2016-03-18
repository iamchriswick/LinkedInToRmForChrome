console.log('@W4CE: injected.js');
require('./injected.scss');
var Firebase = require('firebase');

//console.log('testing injection')

$(document).ready(function() {
    if (window.location.href.indexOf('https://www.linkedin.com/in/') > -1) {
        console.log('your url checks out');

        var myFirebaseRef = new Firebase("https://rm-linkedin-info.firebaseio.com/");

        var magicButton = $('#profile .profile-top-card .profile-aux .profile-actions .katy-button-group');
        var magicButtonCode = '<div class="profile-actions" style="display: block; padding-bottom: 20px;"><div class="katy-button-group" style="width: 100%; text-align: center;"><a href="#" class="button-primary" style="display: block; display: block; background: -webkit-linear-gradient(top, #b1dc64, #58b104 50%, #499400 50%, #5eb80a); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 1px 1px rgba(0, 0, 0, 0.25); border-color: #6d960c;">Copy to Recruitment Manager</a></div></div>'

        if ($(magicButton).length) {
            // it exists
            console.log('boom')
            $('#profile .profile-top-card .profile-aux').prepend(magicButtonCode);
        }

        // $('.profile .top-card .profile-aux .profile-actions .katy-button-group').append('<div class="katy-button-group button-group-primary"><a href="#" class="button-primary" id="tc-actions-send-message" data-action-name="send-message">Copy to RM</a></div>');
    }
});