// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require codemirror
//= require codemirror/modes/shell
//= require dataTables/jquery.dataTables
//= require foundation
//= require studio

$(function(){ $(document).foundation(); });

function close_alert_dialog_button(callback_string){
    return "<button class='button secondary' onclick='closeDialog(); " + callback_string + "'>OK</button>"
}

function closeDialog(){
    $('#alert-dialog-content').html('');
    $('#alert-dialog').foundation('reveal', 'close');
}