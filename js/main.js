let codigoEscaneado = document.querySelector('#codigo-escaneado');

// Issue código incorrecto: https://github.com/mebjas/html5-qrcode/issues/675
const formatsToSupport = [
  Html5QrcodeSupportedFormats.UPC_A,
  Html5QrcodeSupportedFormats.EAN_13,
];

const html5QrcodeScanner = new Html5QrcodeScanner(
  "qr-reader", { 
    fps: 10, 
    qrbox: 250,
    useBarCodeDetectorIfSupported: true,
    defaultZoomValueIfSupported: 2,
    willReadFrequently: true,
    focusMode: "continuous",
    facingMode: "environment",
    formatsToSupport: formatsToSupport
  });

function onScanSuccess(decodedText, decodedResult) {
  console.log(`Code scanned = ${decodedText}`, decodedResult);
  codigoEscaneado.value = `${decodedText}`;
}

html5QrcodeScanner.render(onScanSuccess);
