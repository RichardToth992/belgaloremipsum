document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const generatedText = document.getElementById('generatedText');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const length = document.getElementById('length').value;
      fetch(`/generate?length=${length}`)
        .then(response => response.text())
        .then(text => {
          generatedText.textContent = text;
        });
    });
  });