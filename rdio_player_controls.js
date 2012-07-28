var ChromeExtensionRdioPlayerControls = function(){
  
  var numberOfSeconds;
  var fastForwardKeyCode;
  var rewindKeyCode;
  var playPause = {state: 'pause'};
  
  return {
    init:function(){
      chrome.extension.sendMessage({hotKey: "rewind"}, function(response) {
       rewindKeyCode = response.hotKeyCode;
      });
      chrome.extension.sendMessage({hotKey: "fastForward"}, function(response) {
       fastForwardKeyCode = response.hotKeyCode;
      });
      chrome.extension.sendMessage({hotKey: "pause"}, function(response) {
       playPause.hotKeyCode = response.hotKeyCode;
      });
      chrome.extension.sendMessage({numOfSeconds: "true"}, function(response) {
       numberOfSeconds = response.numOfSeconds || 5;
      });
      window.onkeydown = function(e){
        if(e.keyCode == rewindKeyCode){
          ChromeExtensionRdioPlayerControls._rewind();
        }
        else if(e.keyCode == fastForwardKeyCode){
          ChromeExtensionRdioPlayerControls._fastForward();
        }
        else if(e.keyCode == playPause.KeyCode){
          if(playPause.state != 'pause'){
            playPause.state = 'play';
            ChromeExtensionRdioPlayerControls._pause();
          }
          else {
            playPause.state = 'play';
            ChromeExtensionRdioPlayerControls._play();
          }
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
      R.Services.Player._pause();
    },
    
    _play:function(){
      R.Services.Player._play();
    }
  }
  
}();

ChromeExtensionRdioPlayerControls.init();