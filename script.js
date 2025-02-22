document.addEventListener("DOMContentLoaded", function() {
    const cat = document.getElementById("cat");
    const speechBubble = document.getElementById("speech-bubble");
    const feedBtn = document.getElementById("feed-btn");
    const petBtn = document.getElementById("pet-btn");
    const talkBtn = document.getElementById("talk-btn");
    const switchCatBtn = document.getElementById("switch-cat-btn");
    const music = document.getElementById("bg-music");
    const musicToggle = document.getElementById("music-toggle");
    let hideTimeout;
    let musicStarted = false;
    let currentCat = 1; // Track which cat is displayed

    // Predefined responses
    const responses = {
        "hi": "Meow! Hello, rifayat mahi! 😺",
        "how are you": "Meow!... I'm feeling great mahi! How about you? 🐾",
        "how are you?": "Meow!... I'm feeling great mahi! How about you? 🐾",
        "what is your name": "I don't know, Mahi, but you can call me your vagini 🐱",
        "what is your name?": "I don't know, Mahi, but you can call me your vagini 🐱",
        "do you like food": "Of course! Feed me more fish! 🍣",
        "do you like food?": "Of course! Feed me more fish! 🍣",
        "i love you": "Aww! I love you too, Mahi! ❤️",
        "bye": "Meow! Come back soon! 🐾",
        "who made you": "I am made by y3llow, your friend 🐱",
        "who created you": "I am made by y3llow, your friend 🐱",
        "who create you": "I am made by y3llow, your friend 🐱",
    };

    function speak(text) {
        speechBubble.innerText = text;
        speechBubble.style.display = "block";

        // Reset and set a new timeout for hiding speech bubble after 10 sec
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            speechBubble.style.display = "none";
        }, 10000);
    }

    function startMusic() {
        if (!musicStarted) {
            music.volume = 0.5;
            music.play().catch(() => console.log("Autoplay blocked"));
            musicStarted = true;
        }
    }

    // Basic interactions
    cat.addEventListener("click", function() {
        speak("Meow! Hi Mahi 😺! 🐾");
        startMusic();
    });

    feedBtn.addEventListener("click", function() {
        speak("Yum! I love food! 😻 Thank you, Mahi! ❤️");
        startMusic();
    });

    petBtn.addEventListener("click", function() {
        speak("Purr... I love that, Mahi. Thank you! ❤️");
        startMusic();
    });

    talkBtn.addEventListener("click", function() {
        let userSpeech = prompt("Talk to the cat!");
        if (userSpeech) {
            userSpeech = userSpeech.toLowerCase().trim();
            if (responses[userSpeech]) {
                speak(responses[userSpeech]);
            } else {
                speak(getRandomFallback());
            }
        }
        startMusic();
    });

    function getRandomFallback() {
        const fallbackResponses = [
            "Meow... I don't understand! 😿",
            "Mahi? Try asking something else! 🐾",
            "Mahi, I'm just a cat... I don't know everything right now, but I am learning! 🐱"
        ];
        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }

    // Switch Cat Image
    switchCatBtn.addEventListener("click", function() {
        if (currentCat === 1) {
            cat.src = "cat2.png"; // Switch to second cat
            currentCat = 2;
        } else {
            cat.src = "cat1.jpg"; // Switch back to first cat
            currentCat = 1;
        }
    });

    // Background Music Toggle
    musicToggle.addEventListener("click", function() {
        startMusic();
        if (music.paused) {
            music.play();
            musicToggle.textContent = "🔇 Mute Music";
        } else {
            music.pause();
            musicToggle.textContent = "🔊 Play Music";
        }
    });
});
