
document.addEventListener('DOMContentLoaded', function() {
    // Confetti settings
    var duration = 5 * 1000; // Duration for 5 seconds
    var end = Date.now() + duration;

    (function frame() {
        // Left-side confetti
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        // Right-side confetti
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});
