export const xhr = {
  get: (url, onload, onerror) => {
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();

    xhr.open('GET', url, true);

    xhr.onload = onload;
    xhr.onerror = onerror;

    xhr.send();
  }
}
