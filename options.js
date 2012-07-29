var ChromeExentsionRdioPlayerOptions = function(){
  
  var rewindInput;
  var rewindInputErrorMsg;
  var fastForwardInput;
  var fastForwardInputErrorMsg;
  var pauseInput;
  var pauseInputErrorMsg;
  var numSecondsSelect;
  
  return {
    
    init:function(){
        ChromeExentsionRdioPlayerOptions._setDefaultValues();
        
        rewindInput = document.getElementsByName("rewind_button")[0];
        rewindInputErrorMsg = document.getElementById('rewind_input_error_msg');
        rewindInput.onfocus = function(){ 
          rewindInputErrorMsg.style = "display: none;";
          this.value = ''; 
        }
        rewindInput.onblur = function(){ this.value = String.fromCharCode(localStorage['rdio_player_rewind_key_code']); }
        rewindInput.onkeypress = function(e){
          console.log('Rewind Button Event', e);
          if(ChromeExentsionRdioPlayerOptions._validateKeyChoice(e.keyCode)){
            localStorage['rdio_player_rewind_key_code'] = e.keyCode;
            console.log("localStorage['rdio_player_rewind_key_code']", localStorage['rdio_player_rewind_key_code']);
          }
          else {
            rewindInputErrorMsg.style = "display: inline;";
          }
        }
        
        fastForwardInput = document.getElementsByName("fast_forward_button")[0];
        fastForwardInput.onfocus = function(){ this.value = ''; }
        fastForwardInput.onblur = function(){ this.value = String.fromCharCode(localStorage['rdio_player_fast_forward_key_code']); }
        fastForwardInput.onkeypress = function(e){
          console.log('Fast Forward Button Event', e);
          localStorage['rdio_player_fast_forward_key_code'] = e.keyCode;
          console.log("localStorage['rdio_player_fast_forward_key_code']", localStorage['rdio_player_fast_forward_key_code']);
        }
        
        pauseInput = document.getElementsByName("pause_button")[0];
        pauseInput.onfocus = function(){ this.value = ''; }
        pauseInput.onblur = function(){ this.value = String.fromCharCode(localStorage['rdio_player_pause_key_code']); }
        pauseInput.onkeypress = function(e){
          console.log('Pause Button Event', e);
          localStorage['rdio_player_pause_key_code'] = e.keyCode;
          console.log("localStorage['rdio_player_pause_key_code']", localStorage['rdio_player_pause_key_code']);
        };
        
        numSecondsSelect = document.getElementsByName("num_seconds")[0];
        numSecondsSelect.onchange = function(e){
          localStorage['num_seconds'] = this.value;
          console.log("localStorage['num_seconds']", localStorage['num_seconds']);
        };
    },
    
    _setDefaultValues:function(){
      // http://stackoverflow.com/questions/1772179/get-character-value-from-keycode-in-javascript-then-trim
      document.getElementsByName("rewind_button")[0].value = String.fromCharCode(localStorage['rdio_player_rewind_key_code']);
      document.getElementsByName("fast_forward_button")[0].value = String.fromCharCode(localStorage['rdio_player_fast_forward_key_code']);  
      document.getElementsByName("pause_button")[0].value = String.fromCharCode(localStorage['rdio_player_pause_key_code']);
      document.getElementsByName("num_seconds")[0].value = localStorage['num_seconds'];
    },
    
    _validateKeyChoice:function(key_code){
      return (96 <= key_code && key_code <= 105) ? true : false;
    }
  }
  
}();

window.onload = ChromeExentsionRdioPlayerOptions.init;