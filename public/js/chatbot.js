console.log("chatbot.js");
var src = "http://testbot.weberon.net:3000/index?campaignSource=testJoshua";
var title = "How can we help?";
let chatPreviewIntervalSeconds, chatbotSrc, chatPreviewInitialFlashSeconds;
let isGlobalVarsResolved = false;
let isCBFrameError = false;

let cbPreviewContent = title;
function getUrlWithCampaignSource(chatbotUrl) {
  var campaignSource = getCampaignSource();
  var urlWithCampaignSource = chatbotUrl;
  if (campaignSource) {
    urlWithCampaignSource = appendCampaignSource(
      urlWithCampaignSource,
      campaignSource,
    );
  }
  return urlWithCampaignSource;
}

const updateParamToUrl = (url, paramName, paramValue) => {
  if (url == null) return url;
  try {
    let _url = new URL(url);
    _url.searchParams.set(paramName, paramValue);
    return _url.toString();
  } catch (error) {
    return url;
  }
};

function appendCampaignSource(urlWithCampaignSource, campaignSource) {
  return updateParamToUrl(
    urlWithCampaignSource,
    "campaignSource",
    campaignSource,
  );
}

function getCampaignSource() {
  var campaignSource = null;
  try {
    var utm_medium = getSearchParams(window.location.href)["utm_medium"];
    var utm_source = getSearchParams(window.location.href)["utm_source"];
    var utm_campaign = getSearchParams(window.location.href)["utm_campaign"];
    var utm_content = getSearchParams(window.location.href)["utm_content"];
    if (
      utm_medium != undefined &&
      utm_source != undefined &&
      utm_campaign != undefined &&
      utm_content != undefined
    ) {
      campaignSource =
        utm_medium + "-" + utm_source + "-" + utm_campaign + "-" + utm_content;
    } else {
      campaignSource = undefined;
    }
  } catch (err) {}
  return campaignSource;
}

function messageSent(event) {
  console.log("[CB] Message sent!!");
}

let initFlag = false;

function initializeChatIfnotInitialized(event) {
  if (event.data == "server_connected" && initFlag === false) {
    enableFlash();
    enableChatPreviewAfterSomeSeconds(chatPreviewInitialFlashSeconds);
    initFlag = true;
  }
}

function receiveMessage(event) {
  console.log("[CB] Message received !!", event);
}

function receiveChatMessage(event) {
  console.log("[CB] Chat Message received !!", event);
  initializeChatIfnotInitialized(event);
  enableFlash();
}

function getSearchParams(url_string) {
  const params2 = {};
  try {
    const url = new URL(url_string);
    for (const p of url.searchParams) {
      params2[p[0]] = p[1];
    }
  } catch (e) {
    console.log(e);
  }
  console.log("[CB] Params : " + JSON.stringify(params2));
  return params2;
}

function isMonitoringRequest() {
  return getSearchParams(window.location.href)["hck"] == "true";
}

window.addEventListener("bot_uttered", receiveMessage, false);
window.addEventListener("message", receiveMessage, false);
window.addEventListener("chat_incomming_message", receiveChatMessage, false);
window.addEventListener("chat_outgoing_message", messageSent, false);

function toggleChat() {
  console.log("[CB] Toggle clicked");
  const chatbox = document.getElementById("chat-box");
  const chatcircle = document.getElementById("chat-bottom");
  disableFlash();
  disableChatPreview();
  if (chatbox.classList.contains("hide")) {
    chatbox.classList.remove("hide");
    chatcircle.classList.add("hide");
  } else {
    chatcircle.classList.remove("hide");
    chatbox.classList.add("hide");
    enableChatPreviewAfterSomeSeconds(chatPreviewIntervalSeconds);
  }
}

function registerError() {
  document.getElementById("cbframe").onerror = (e) => {
    console.log("[CB] Errror occured on cbFrame", e);
    isCBFrameError = true;
  };
}

const disableChatPreview = () => {
  const cbPreview = document.getElementById("chat-preview-container");
  cbPreview.classList.add("hide");
  enableChatPreviewAfterSomeSeconds(chatPreviewIntervalSeconds);
};

const isNumber = (v) => /^[\d]*$/g.test(v);

const enableChatPreviewAfterSomeSeconds = (seconds) => {
  if (!isNumber(seconds) || seconds < 0) return;
  enableChatPreview(seconds * 1000);
};

let chatPreviewTimer = null;

const waitForChatPreview = (timeInMs) => {
  console.log("[CB] Requested to wait for", { timeInMs });
  timeInMs = /\d/g.test(timeInMs) ? timeInMs : 0;
  clearTimeout(chatPreviewTimer);
  return new Promise((res) => {
    chatPreviewTimer = setTimeout(() => {
      res();
    }, timeInMs);
  });
};

const enableChatPreview = async (waitMs = 0) => {
  const cbPreview = document.getElementById("chat-preview");
  cbPreview.classList.remove("appear-animation");
  await waitForChatPreview(waitMs);
  const chatcircle = document.getElementById("chat-bottom");
  if (!chatcircle.classList.contains("hide") && isCBFrameError === false) {
    const cbPreviewContainer = document.getElementById(
      "chat-preview-container",
    );
    cbPreviewContainer.classList.remove("hide");
    cbPreview.classList.add("appear-animation");
    const cbPreviewText = document.getElementById("chat-preview-message");
    cbPreviewText.innerText = cbPreviewContent;
  }
};

const enableFlash = () => {
  let cb = document.getElementById("chat-circle");
  if (cb != null) cb.classList.add("flash");
};

const disableFlash = () => {
  let cb = document.getElementById("chat-circle");
  if (cb != null) cb.classList.remove("flash");
};

function renderChatBot2(chatbotServerUrl) {
  let e1 = document.createElement("div");
  e1.id = "mycb";
  e1.innerHTML = `
  <div id="chat-bottom">
    <div id="chat-bottom-container">
      <div id="chat-preview-container" class="hide">
        <div id="chat-preview" class="appear-animation">
            <i class="fas fa-times-circle fa-2x" onclick="disableChatPreview()"></i>
            <div id="chat-preview-message" class="arrow-right" onclick="toggleChat()">
            </div>           
        </div>
      </div>
      <div id="chat-circle" onclick="toggleChat()">
        <i class="fas fa-comments"></i>
      </div>
    </div>
  </div>
  <div id="chat-box" class="hide">
      <div class="chat-box-header">
          Ready to Help!
          <span class="chat-box-toggle" onclick="toggleChat()">
            <i class="fas fa-times"></i>
          </span>                
      </div>
      <object id="cbframe" class="chat-box-body" data=${chatbotServerUrl} standby="Loading...">
        <div class="error-box">
          <h3>Sorry! </h3>
          <span>Live Operators not available</span>
          <h5>Please check back later</h5>
        </div>

      </object>
  </div>
  `;
  let chatContainer = document.getElementById("chatContain");
  if (chatContainer == null) {
    chatContainer = document.createElement("div");
    chatContainer.setAttribute("id", "chatContain");
    document.body.appendChild(chatContainer);
  }
  document.getElementById("chatContain").appendChild(e1);
  registerError();
}

const waitFor = (
  executorFunction,
  whatFor,
  MAXWAIT = 3000,
  WAIT_INTERVAL = 100,
) => {
  return new Promise((res, rej) => {
    let waited = 0;
    const errors = {};
    const cleaner = (timer) => {
      for (const key of Object.keys(errors)) {
        const error = errors[key];
        console.error(
          `[CB] ERROR while executing executorFunction waiting for ${whatFor}`,
          error,
        );
      }
      clearInterval(timer);
    };
    let timer = setInterval(() => {
      if (waited >= MAXWAIT) {
        cleaner(timer);
        rej("Crossed Maximum Wait Time");
      }
      try {
        const result = executorFunction();
        if (result.isValid) {
          cleaner(timer);
          res(result);
        }
      } catch (error) {
        errors[error.message] = error;
      }

      waited += WAIT_INTERVAL;
    }, WAIT_INTERVAL);
  });
};

const getMauticSrc = async () => {
  const executorFunction = () => ({
    isValid: mauticSrc != null,
  });
  await waitFor(executorFunction, "mauticSrc");
  return mauticSrc;
};

const getUrlWithMauticSrc = async (url) => {
  try {
    const mautic_src = await getMauticSrc();
    return updateParamToUrl(url, "mauticSrc", mautic_src);
  } catch (error) {
    console.error("[CB] Couldn't fetch mauticSrc");
    return url;
  }
};

const getMtcId = async () => {
  const executorFunction = () => ({
    isValid: window.localStorage.mtc_id != null,
  });
  await waitFor(executorFunction, "mtc_id");
  return window.localStorage.mtc_id;
};

const getUrlWithMtcId = async (url) => {
  try {
    const mtc_id = await getMtcId();
    return updateParamToUrl(url, "mtc_id", mtc_id);
  } catch (error) {
    console.error("[CB] Couldn't fetch mtc_id");
    return url;
  }
};

const waitForCustomGlobalVariables = async () => {
  const executorFunction = () => ({
    isValid: window.getCustomGlobalVariables != null,
  });
  await waitFor(executorFunction, "getCustomGlobalVariables Function");
};

const resolveGlobalvariablesAndUpdateLocally = async () => {
  try {
    await waitForCustomGlobalVariables();
    const {
      CHATBOT_SRC,
      CHAT_PREVIEW_FLASH_SECONDS,
      CHAT_PREVIEW_INITIAL_FLASH_SECONDS,
    } = window.getCustomGlobalVariables();
    chatbotSrc = CHATBOT_SRC;
    chatPreviewIntervalSeconds = CHAT_PREVIEW_FLASH_SECONDS;
    chatPreviewInitialFlashSeconds = CHAT_PREVIEW_INITIAL_FLASH_SECONDS;
    isGlobalVarsResolved = true;
  } catch (error) {
    console.error("[CB] Couldn't fetch getCustomGlobalVariables");
  }
};

const onReady = async () => {
  try {
    await resolveGlobalvariablesAndUpdateLocally();
    if (isGlobalVarsResolved === false) return;
    const urlWithCampaignSource = getUrlWithCampaignSource(chatbotSrc);
    const urlWithMtcId = await getUrlWithMtcId(urlWithCampaignSource);
    const urlWithMauticSrc = await getUrlWithMauticSrc(urlWithMtcId);
    renderChatBot2(urlWithMauticSrc);
  } catch (error) {
    console.error(error);
  }
};

/*
$(document).ready( handler ) is deprecated
use: $( handler )
https://api.jquery.com/ready/#ready-handler
*/
$(function () {
  onReady();
});
