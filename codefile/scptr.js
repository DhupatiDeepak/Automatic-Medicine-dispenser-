document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    const binaryCodeForm = document.getElementById('binaryCodeForm');
    const quantityForm = document.getElementById('quantityForm');
    const qrCode = document.getElementById('qrCode');
    const paymentStatus = document.getElementById('paymentStatus');

    binaryCodeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        page1.style.display = 'none';
        page2.style.display = 'block';
    });

    quantityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const binaryCode = document.getElementById('binaryCode').value;
        const quantity = parseInt(document.getElementById('quantity').value);

        // Send binary code and quantity to the server for processing
        // For demonstration purposes, let's assume the server responds with a QR code URL
        const qrCodeUrl = `http://randomqr.com//generate_qr_code?binary_code=${binaryCode}&quantity=${quantity}`;

        // Display QR code and payment status
        qrCode.src = qrCodeUrl;
        page2.style.display = 'none';
        page3.style.display = 'block';
        paymentStatus.textContent = 'Scan QR code for payment.';
    });

    qrCode.onload = () => {
        // Assume QR code loaded successfully
        page3.style.display = 'none';
        page4.style.display = 'block';
    };
});
