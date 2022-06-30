var message = prompt('Digite a mensagem a ser enviada', '‎');
var counter = parseInt(prompt('Digite o numero de repetições', 10));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent('input', { bubbles: true });
var textbox = document.getElementsByClassName(
  '_13NKt copyable-text selectable-text',
)[1];
for (let index = 0; index < counter; index++) {
  (function (ind) {
    setTimeout(function () {
      textbox.innerHTML = index + ' ' + ' ' + message;
      textbox.dispatchEvent(event);
      document
        .getElementsByClassName(
          'tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq',
        )[0]
        .click();
    }, 1000 + 1000 * ind);
  })(index);
}
