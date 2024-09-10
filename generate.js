document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const uniqueIdDisplay = document.getElementById('uniqueIdDisplay');
    const generatedIdInput = document.getElementById('generatedId');

    generateButton.addEventListener('click', async () => {
        try {
            const response = await fetch('http://localhost:3001/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            uniqueIdDisplay.textContent = `Unique ID: ${data.uniqueId}`;
            generatedIdInput.value = data.uniqueId;

            // Store the generated ID in local storage
            localStorage.setItem('generatedId', data.uniqueId);
        } catch (error) {
            console.error('Error:', error);
            uniqueIdDisplay.textContent = 'Failed to generate ID. Please try again.';
        }
    });
});
