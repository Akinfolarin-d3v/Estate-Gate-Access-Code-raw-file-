document.addEventListener('DOMContentLoaded', () => {
    const verifyButton = document.getElementById('verifyButton');
    const verificationResult = document.getElementById('verificationResult');
    const verifyIdInput = document.getElementById('verifyId');

    verifyButton.addEventListener('click', async () => {
        const id = verifyIdInput.value.trim();  // Get the value from the input field

        if (!id) {
            verificationResult.textContent = 'Please enter an ID to verify.';
            verificationResult.style.color = 'red';
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ uniqueId: id })
            });
            const data = await response.json();

            if (data.valid) {
                verificationResult.textContent = 'Code is compatible - Access granted';
                verificationResult.style.color = 'green';
                verifyIdInput.value = '';
            } else {
                verificationResult.textContent = 'ID is invalid. Please check and try again.';
                verificationResult.style.color = 'red';
            }
        } catch (error) {
            console.error('Error:', error);
            verificationResult.textContent = 'An error occurred. Please try again.';
            verificationResult.style.color = 'red';
        }
    });
});
