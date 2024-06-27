const scale = 10; // Scale factor to make the illustration easier to look at
const canvas = document.querySelector("#canvas");
const rangeInput = document.querySelector('#rangeInput');
const rangeValueDiv = document.querySelector('#rangeValue');
const ctx = canvas.getContext("2d");

// Recamán sequence scaled for better visualization
const sequence = [0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62,
    42, 63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78, 38,
    79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29, 88, 28, 89, 27, 90, 26, 91
].map(item => item * scale);

/**
 * Event handler for range input change.
 * Updates the displayed value and redraws the Recamán sequence.
 * @param {number} value - The new value of the range input.
 */
const onInputChangeHandler = (value) => {
    rangeValueDiv.innerText = value;
    drawRecaman(value);
};

rangeInput.addEventListener('input', e => onInputChangeHandler(e.target.value));

/**
 * Draw the Recamán sequence up to the specified limit.
 * Clears the canvas and redraws the sequence arcs.
 * @param {number} limit - The limit index to draw the sequence up to.
 */
const drawRecaman = (limit) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    ctx.beginPath();
    ctx.moveTo(sequence[0], canvas.height / 2); // Start from the first point

    for (let i = 0; i < limit; i++) {
        const current = sequence[i];
        const next = sequence[i + 1];
        const mid = (current + next) / 2;
        const radius = Math.abs(current - next) / 2;
        const direction = i % 2 === 0 ? 1 : -1; // Alternating direction for arcs

        ctx.arc(mid, canvas.height / 2, radius, 0, Math.PI * direction, direction > 0);
    }

    ctx.strokeStyle = 'black'; // Set the stroke color
    ctx.stroke(); // Apply the stroke
};

// Initial drawing
drawRecaman(rangeInput.value);
