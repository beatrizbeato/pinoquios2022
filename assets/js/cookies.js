var banner = document.querySelector(".c-bottom-bar");
var cookiesAccept = document.querySelector('a[data-action="cookies-accept"]');
var cookiesClose = document.querySelector('a[data-action="cookies-close"]');

function checkForAcceptedCookies() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.acceptCookies) {
      return true;
    }
  }
  return false;
}

function acceptCookies() {
  if (typeof(Storage) !== "undefined") {
    localStorage.acceptCookies = true;
    return true;
  }
  return false;
}

function deleteCookies() {
  for (var it in $.cookie()) $.removeCookie(it);
}

function showBanner() {
  banner.removeAttribute('hidden');
}

function removeBanner() {
  banner.parentNode.removeChild(banner);
}

cookiesAccept.onclick = function() {
  acceptCookies();
  removeBanner();
};

cookiesClose.onclick = function() {
  deleteCookies();
  removeBanner();
};

document.addEventListener("DOMContentLoaded", function(){
  if(checkForAcceptedCookies()) {
    removeBanner();
  } else {
    showBanner();
  }
});