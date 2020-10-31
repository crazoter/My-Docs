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
  document.querySelectorAll('paper-item.style-scope.ytd-menu-service-item-renderer')[1].click();
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