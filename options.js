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
        rewindInput.onfocus = function(){ this.value = ''; }
        rewindInput.onblur = function(){ 
          rewindInputErrorMsg.style.display = "none";
          this.value = String.fromCharCode(localStorage['rdio_player_rewind_key_code']); 
        }
        rewindInput.onkeypress = function(e){
          if(ChromeExentsionRdioPlayerOptions._validateKeyChoice(e.keyCode)){
            localStorage['rdio_player_rewind_key_code'] = e.keyCode;
          }
          else {
            rewindInputErrorMsg.style.display = "inline";
          }
        }
        
        fastForwardInput = document.getElementsByName("fast_forward_button")[0];
        fastForwardInputErrorMsg = document.getElementById('fast_forward_input_error_msg');
        fastForwardInput.onfocus = function(){ this.value = ''; }
        fastForwardInput.onblur = function(){ 
          fastForwardInputErrorMsg.style.display = "none";
          this.value = String.fromCharCode(localStorage['rdio_player_fast_forward_key_code']); 
        }
        fastForwardInput.onkeypress = function(e){
          if(ChromeExentsionRdioPlayerOptions._validateKeyChoice(e.keyCode)){
            localStorage['rdio_player_fast_forward_key_code'] = e.keyCode;
          }
          else {
            fastForwardInputErrorMsg.style.display = "inline";
          }
        }
        
        pauseInput = document.getElementsByName("pause_button")[0];
        pauseInputErrorMsg = document.getElementById('pause_input_error_msg');
        pauseInput.onfocus = function(){ this.value = ''; }
        pauseInput.onblur = function(){ 
          pauseInputErrorMsg.style.display = "none";
          this.value = String.fromCharCode(localStorage['rdio_player_pause_key_code']); 
        }
        pauseInput.onkeypress = function(e){
          if(ChromeExentsionRdioPlayerOptions._validateKeyChoice(e.keyCode)){
            localStorage['rdio_player_pause_key_code'] = e.keyCode;
          }
          else {
            pauseInputErrorMsg.style.display = "inline";
          }
        }
        
        numSecondsSelect = document.getElementsByName("num_seconds")[0];
        numSecondsSelect.onchange = function(e){
          localStorage['num_seconds'] = this.value;
        };
    },
    
    _setDefaultValues:function(){
      document.getElementsByName("rewind_button")[0].value = String.fromCharCode(localStorage['rdio_player_rewind_key_code']);
      document.getElementsByName("fast_forward_button")[0].value = String.fromCharCode(localStorage['rdio_player_fast_forward_key_code']);  
      document.getElementsByName("pause_button")[0].value = String.fromCharCode(localStorage['rdio_player_pause_key_code']);
      document.getElementsByName("num_seconds")[0].value = localStorage['num_seconds'];
    },
    
    _validateKeyChoice:function(key_code){
      return key_code == 0 ? false : true
    }
  }
  
}();

window.onload = ChromeExentsionRdioPlayerOptions.init;