import chobitsu from 'chobitsu';
import { embedded, rtc } from './target/config';
import connectRtc from './target/connectRtc';
import connectServer from './target/connectServer';
import connectIframe from './target/connectIframe';

let bootstrapCommandId = 1;

function enableEarlyDomains() {
  // Enable instrumentation immediately so early console/network events are captured.
  const methods = ['Runtime.enable', 'Network.enable', 'Log.enable'];
  for (const method of methods) {
    chobitsu.sendRawMessage(
      JSON.stringify({
        id: `bootstrap-${bootstrapCommandId++}`,
        method,
      })
    );
  }
}

enableEarlyDomains();

if (!embedded) {
  if (rtc) {
    connectRtc();
  } else {
    connectServer();
  }
} else {
  connectIframe();
}

module.exports = {
  chobitsu,
};
