document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        try {
            const response = await fetch('/submit', {
                method: 'POST',
                body: formData,
            });

            if (response.status === 200) {
                confirmationMessage.style.display = 'block';
                form.reset();
            }
        } catch (error) {
            console.error(error);
        }
    });
});
