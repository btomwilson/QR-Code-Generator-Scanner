// script.js
async function generateQRCode() {
    const input = document.getElementById('qr-input').value;
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: input })
        });
        const data = await response.json();
        displayQRCode(data.qrCodeUrl);
    } catch (error) {
        console.error('Error generating QR code:', error);
    }
}

function displayQRCode(qrCodeUrl) {
    const qrCodeContainer = document.getElementById('qr-code-container');
    qrCodeContainer.innerHTML = `<img src="${qrCodeUrl}" alt="QR Code">`;
}
