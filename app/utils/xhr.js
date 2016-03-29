export const xhr = {
  get: (url, onsuccess, onservererror, onnetworkerror) => {
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();

    xhr.open('GET', url, true);

    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        onsuccess(this);
      } else {
        onservererror(this);
      }
    }
    xhr.onerror = onnetworkerror ||
      function() {alert( 'Ошибка ' + this.status );}

    xhr.send();
  }
}
