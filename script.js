const inputBox = document.querySelector("#inputbox");
const generateBtn = document.querySelector("#GenerateBtn");
const qrCodeImg = document.querySelector("#qrcodeimg");
const Messagelabel =document.querySelector("#msg")
qrCodeImg.hidden=true
generateBtn.addEventListener("click", function () {
  generateQRCode();
});

function generateQRCode() {
  const inputValue = inputBox.value.trim();
  if (inputValue !== "") {
    qrCodeImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
      encodeURIComponent(inputValue);
      qrCodeImg.hidden=false
      msg.innerHTML="QR Generated"

    console.log("QR code generated");
  } else {
    alert("Please enter text or a link.");
  }
}

inputBox.addEventListener("input", function() {
  msg.innerHTML=""
  qrCodeImg.hidden=true
});
