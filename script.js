const inputBox = document.querySelector("#inputbox");
const generateBtn = document.querySelector("#GenerateBtn");
const qrCodeImg = document.querySelector("#qrcodeimg");
const Messagelabel = document.querySelector("#msg");
const downloadbtn = document.querySelector(".downloadBtn");
qrCodeImg.hidden = true;
downloadbtn.hidden = true;
generateBtn.addEventListener("click", function () {
  generateQRCode();
});

downloadbtn.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', qrCodeImg.src, true);
  xhr.responseType = 'blob';

  xhr.onload = function() {
    if (xhr.status === 200) {
      var blob = xhr.response;
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'qrcode.png'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  xhr.send();
});


function generateQRCode() {
  const inputValue = inputBox.value.trim();
  if (inputValue !== "") {
    qrCodeImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
      encodeURIComponent(inputValue);
    qrCodeImg.hidden = false;
    downloadbtn.hidden = false;
    msg.innerHTML = "QR Generated";
    console.log("QR code generated");
  } else {
    alert("Please enter text or a link.");
  }
}

inputBox.addEventListener("input", function () {
  msg.innerHTML = "";
  qrCodeImg.hidden = true;
  downloadbtn.hidden=true;
});

inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    generateQRCode();
  }
});
