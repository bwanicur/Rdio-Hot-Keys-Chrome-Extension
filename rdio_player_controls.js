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
      jQuery(window).keypress(function(e){
        if(e.code == rewindKeyCode){
          ChromeExtensionRdioPlayerControls._rewind();
        }
        else if(e.code == fastForwardKeyCode){
          ChromeExtensionRdioPlayerControls._fastForward();
        }
        else if(e.code == pauseKeyCode){
          ChromeExtensionRdioPlayerControls._pause();
        }
      })
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