document.addEventListener('DOMContentLoaded', function() {
    // Permite apenas uma seleção por vez
    const checkboxes = document.querySelectorAll('.option-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                // Desmarca os outros checkboxes
                checkboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== this) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });
});