onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('You Are My Everything 🌺🌼💫🦄').split('')
        const titleElement = document.getElementById('title');
        let index = 0;

        function appendTitle() {
            if (index < titles.length) {
                titleElement.innerHTML += titles[index];
                index++;
                setTimeout(appendTitle, 180); // 1000ms delay
            }
        }

        appendTitle();

        clearTimeout(c);
    }, 1100);
};