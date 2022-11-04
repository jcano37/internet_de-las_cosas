var socket = io();

function estado1() {
    if (document.getElementById("check").checked) {
      socket.emit('LedOn1');
    } else {
      socket.emit('LedOff1');
    }
  }

  function estado2() {
    if (document.getElementById("ckeck2").checked) {
      socket.emit('LedOn2');
    } else {
      socket.emit('LedOff2');
    }
  }

  function estado3() {
    if (document.getElementById("ckeck3").checked) {
      socket.emit('LedOn3');
    } else {
      socket.emit('LedOff3');
    }
  }

  $(function () {
    $('[data-toggle="popover"]').popover()
  })

