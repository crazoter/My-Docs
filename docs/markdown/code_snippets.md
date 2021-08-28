---
title: Code Snippets
---

## Javascript

### Print transcripts to console
Last Updated: 10/30/2020
```
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function getTranscript() {
  // Target more actions button via youtube info header
  document.querySelectorAll("#info.style-scope.ytd-video-primary-info-renderer")[0].children[2].children[0].children[0].children[1].click();
  await sleep(10);
  // Target the transcripts button
  document.querySelectorAll('tp-yt-paper-item.style-scope.ytd-menu-service-item-renderer')[1].click();
  // Wait until transcripts loaded, then scrape
  while (true) {
    await sleep(1000);
    if (document.getElementsByClassName("cue style-scope ytd-transcript-body-renderer").length <= 0)
      continue;

    j = ""; 
    Array.from(document.getElementsByClassName("cue style-scope ytd-transcript-body-renderer")).forEach((i) => { j += i.innerText.charAt(0).toUpperCase() + i.innerText.slice(1) + " "; }); 
    console.log(j);
    break;
  }
}
getTranscript();
```

### My Bluetooth keyboard AHK script for fixing faulty spacebar
```
;AHK script to properly page up / down etc
;F1	Browser_Home
;F2	Browser_Search
;F3	LWin + a
;F4	LWin + c
;F5	LWin + v
;F6	LWin + x
;F7	Media_Prev
;F8	Media_Play_Pause
;F9	Media_Next
;F10	Volume_Down
;F11	Volume_Up
;F12	Nothing

xbToggle := 1
prevTime := -1

;F4 with alt 4
!4::!F4

Browser_Search::f4

!Left::Send {HOME}
+!Left:: Send +{HOME}

!RIGHT::Send {END}
+!RIGHT:: Send +{END}

Browser_Home::
	xbToggle	:= !xbToggle
	if (xbToggle = 1){
		Hotkey, !Left, On
		HotKey, !RIGHT, On
	}else{
		Hotkey, !Left, Off
		Hotkey, !RIGHT, Off
	}
return

$Space::
	now := A_TickCount
	if (now - prevTime > 33)
	{
		Send {Space}
		prevTime := now
	}
return

Browser_Back::Esc

;https://autohotkey.com/board/topic/64576-the-definitive-autofire-thread/
$F8::
    KeyWait F8, T0.1                 ; Wait 1/10 second for user to release "a" key
    If ErrorLevel                   ; Still held down
        While GetKeyState("F8","p"){ ; While it is held down
            Click
            Sleep 33
        }
    Else                            ; They let go in time
        Send a
return

+^U:: 	;CTRL+U: MD URL, EXPECTS URL IN CLIPBOARD
	Send, [
	Send, {RIGHT}
	Send, {RIGHT}
	Send, (
	Send, ^v
return

+^I:: 	;CTRL+U: MD IMG, EXPECTS URL IN CLIPBOARD
	Send, ![
	Send, {RIGHT}
	Send, {RIGHT}
	Send, (
	Send, ^v
return

+^L::	;SHIFT+CTRL+L: OPEN Image2LaTeX.exe
	;Taskkill any old javaw.exe if any
	RunWait %comspec% /c "taskkill /im javaw.exe",,Hide 
	; Open the program
	Run, D:\DownloadsHDD\Image2LaTeX-0.7.7-windows\Image2LaTeX-windows\Image2LaTeX.exe
```
