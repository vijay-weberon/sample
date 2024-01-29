console.log("branded.js");
let controlVideos = false;
let reports;

setReports();

function getPageID() {
  let pageID = currentPageName.split(".")[0];
  return pageID;
}

window.addEventListener("load", function () {
  console.log("OnPageLoad");
  trackParametersOnPageLoad();
  addShareWidget();
});

function reWriteCTALink(id) {
  let ctaLink = document.getElementById(id);
  if (
    ctaLink != null &&
    lp_CTA_Link_Domain != null &&
    lp_CTA_Link_Domain != ""
  ) {
    let href = ctaLink.getAttribute("href");
    href = "https://" + lp_CTA_Link_Domain + "/" + href;
    ctaLink.setAttribute("href", href);
  }
}

function getCurrentPageName() {
  let pageName;
  let path = window.location.pathname;
  path = decodeURIComponent(path);
  if (path == "/") {
    pageName = "index";
  } else {
    let arr = path.split("/");
    pageName = arr[arr.length - 1];
    pageName = pageName.split(".")[0];
  }
  return pageName;
}

function displayForm(lpModal, duration) {
  let x = duration == undefined ? timeInterval : duration;
  let body = document.getElementsByTagName("body")[0];
  let timer0 = setInterval(function () {
    lpModal.style.display = "block";
    body.style.overflow = "hidden";
    if (controlVideos) {
      pauseVideosIfPlaying();
    }
    clearInterval(timer0);
  }, x);
}

function enablePopupForm(x, y, z, cv) {
  popupForm = true;
  if (
    x != undefined &&
    Number.isInteger(x) &&
    y != undefined &&
    Number.isInteger(y) &&
    z != undefined &&
    Number.isInteger(z)
  ) {
    timeInterval = x;
    nTimes = y;
    zDuration = z;
  }
  if (cv == true) {
    controlVideos = true;
  }
}

function resizeVideo(parentTag) {
  if (parentTag != undefined && parentTag != "") {
    let parentElement = document.getElementById(parentTag);
    if (parentElement != null) {
      let width = parentElement.offsetWidth;
      let mp = document.getElementById("mep_0");
      if (mp != null) {
        mp.style.width = "" + (width - 30) + "px";
      }
      let video = document.getElementById("video");
      if (video != null) {
        video.style.width = "" + (width - 30) + "px";
      }
      let iframe = document.getElementById("me_youtube_0_container");
      if (iframe != null && iframe.getAttribute("src") != null) {
        iframe.style.width = "" + (width - 30) + "px";
      }
    }
  }
}

function setAreaCodeRegEx() {
  let filePath = "/js/areacodes.json";
  let url = window.baseURL ? baseURL + filePath : filePath;
  $.getJSON(url)
    .done(function (data) {
      data.forEach(function (val) {
        areaCodeRegex += val + "|";
      });
      areaCodeRegex = areaCodeRegex.slice(0, -1);
      areaCodeRegex = new RegExp(areaCodeRegex);
    })
    .fail(function (jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      console.log("Request Failed: " + err);
      logError("Error loading: " + "'/js/areacodes.json'");
    });
}

function setInitialFormHeader(reqFormHeader) {
  formHeader = reqFormHeader;
}

function readMore(slotID) {
  let pageName = currentPageName.split(".")[0];
  let readMoreFlag = localStorage.getItem(pageName + "-readMore");
  if (readMoreFlag != undefined && readMoreFlag == "yes") {
    return;
  } else {
    loadForm(slotID);
    localStorage.setItem(pageName + "-readMore", "yes");
  }
}

function showReportPageContent() {
  if (page == "asset" || page == "m_asset") {
    let emailSubmitted = document.getElementById(
      "mauticform_input_" + formName + "_email_submitted",
    );
    let emailVerified = document.getElementById(
      "mauticform_input_" + formName + "_ev",
    );
    if (emailSubmitted.value == "yes" || emailVerified.value == "true") {
      document.getElementById("note").style.display = "none";
      document.getElementById("report").style.display = "";
    }
    let dots = document.getElementById("dots");
    if (dots) {
      dots.style.display = "none";
    }
    let note = document.getElementById("note");
    if (note) {
      note.style.display = "none";
    }
  }
}

function setReports() {
  let filePath = "/js/reports.json";
  let url = window.baseURL ? baseURL + filePath : filePath;
  $.getJSON(url)
    .done(function (data) {
      reports = data;
    })
    .fail(function (jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      console.log("Request Failed: " + err);
      logError("Error loading: " + "'/js/reports.json'");
    });
}
