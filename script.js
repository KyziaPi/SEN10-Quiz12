window.onload = function() {
    createFloatingTitle();
    launchConfetti();
};

// Rainbow floating title (upper middle, centered with spaced words)
function createFloatingTitle() {
    const text = "Welcome to the Ugliest Website!" // removed semi-colon for fail test
    const colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8f00ff"];

    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "15%"; // upper middle
    container.style.width = "100%";
    container.style.textAlign = "center";
    container.style.fontSize = "2.5rem";
    container.style.fontWeight = "bold";
    container.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
    container.style.zIndex = "9999";
    container.style.pointerEvents = "none";
    container.style.animation = "floatFade 3s ease-out forwards";
    container.style.wordSpacing = "15px"; // added spacing between words

    // Rainbow letters
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement("span");
        span.textContent = text[i];
        span.style.color = colors[i % colors.length];
        span.style.display = "inline-block";
        span.style.transform = `rotate(${Math.sin(i) * 10}deg)`;
        container.appendChild(span);
    }

    document.body.appendChild(container);

    // Floating fade animation
    const style = document.createElement("style");
    style.textContent = `
        @keyframes floatFade {
            0% {
                opacity: 0;
                transform: translateY(10px) scale(0.8);
            }
            30% {
                opacity: 1;
                transform: translateY(-10px) scale(1.1);
            }
            70% {
                opacity: 1;
                transform: translateY(-20px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-40px) scale(1);
            }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        container.remove();
    }, 3000);
}

// Rainbow confetti
function launchConfetti() {
    const confettiCount = 300;
    const colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8f00ff"];

    for (let i = 0; i < confettiCount; i++) {
        const confetto = document.createElement("div");
        confetto.style.position = "fixed";
        confetto.style.top = "-10px";
        confetto.style.left = Math.random() * 100 + "vw";
        confetto.style.width = Math.random() * 10 + 5 + "px";
        confetto.style.height = Math.random() * 14 + 6 + "px";
        confetto.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetto.style.opacity = Math.random() * 0.9 + 0.1;
        confetto.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetto.style.borderRadius = "2px";
        confetto.style.zIndex = "9998";
        confetto.style.animation = `fall ${2 + Math.random() * 4}s linear forwards`;

        document.body.appendChild(confetto);

        setTimeout(() => {
            confetto.remove();
        }, 5000);
    }

    const style = document.createElement("style");
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

