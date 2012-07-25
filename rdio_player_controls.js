var ChromeExtensionRdioPlayerControls = function(){
  
  var numberOfSeconds;
  var fastForwardKeyCode;
  var rewindKeyCode;
  var pauseKeyCode;
  
  return {
    init:function(){
      // TODO: message passing to get extension localStorage values
      rewindKeyCode = null;
      fastForwardKeyCode = null;
      pauseKeyCode = null;
      numberOfSeconds = null || 5;
      window.onkeydown = function(e){
        if(e.keyCode == rewindKeyCode){
          ChromeExtensionRdioPlayerControls._rewind();
        }
        else if(e.keyCode == fastForwardKeyCode){
          ChromeExtensionRdioPlayerControls._fastForward();
        }
        else if(e.keyCode == pauseKeyCode){
          ChromeExtensionRdioPlayerControls._pause();
        }
      }
    },
  
    _rewind:function(){
      R.Services.Player.seek(R.Services.Player.model.get('position') - numberOfSeconds);
    },
  
    _fastForward:function(){
      R.Services.Player.seek(R.Services.Player.model.get('position') + numberOfSeconds);
    },
  
    _pause:function(){
      // TODO: look at Rdio codebase and find pause command
    }
  }
  
}();

ChromeExtensionRdioPlayerControls.init();