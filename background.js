chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.hotKey == "rewind"){ 
      sendResponse({hotKeyCode: localStorage['rdio_player_rewind_key_code']});
    }
    else if (request.hotKey == 'fastForward'){
      sendResponse({hotKeyCode: localStorage['rdio_player_fast_forward_key_code']});
    }
    else if (request.hotKey == 'pause'){
      sendResponse({hotKeyCode: localStorage['rdio_player_pause_key_code']});
    }
    else if (request.numOfSeconds == 'true'){
      sendResponse({numOfSeconds: localStorage['num_seconds']});
    }
});