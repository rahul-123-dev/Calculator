// Get display
const display = document.querySelector('.display input');

// Get all buttons
const buttons = document.querySelectorAll('.button input[type="button"]');

// Add click event to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'AC') {
            display.value = '0';
        } else if (value === 'DEL') {
            display.value = display.value.length > 1 ? display.value.slice(0, -1) : '0';
        } else if (value === '=') {
            try {
                let result = display.value.replace(/X/g, '*');
                display.value = eval(result);
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            if (display.value === '0' || display.value === 'Error') {
                display.value = value;
            } else {
                display.value += value;
            }
        }
    });
});
