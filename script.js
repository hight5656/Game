(function () {
    let userName = prompt('Enter your name') || 'Player';
    let countButtonPress = 0;

    const generatorButton = document.getElementById('btn');
    generatorButton.addEventListener('click', generate);

    const userNameElement = document.getElementById('userName');
    const menuElement = document.querySelector('.menu');

    userNameElement.textContent = userName;

    function generate() {
        countButtonPress++;

        const getContent = (id) => document.getElementById(id).innerHTML;

        const swapContent = (content1, content2, content3, img1, img2, img3, numberOfScrolls) => {
            let temp = content3;
            content3 = content2;
            content2 = content1;
            content1 = temp;

            document.getElementById(img1).innerHTML = content1;
            document.getElementById(img2).innerHTML = content2;
            document.getElementById(img3).innerHTML = content3;

            numberOfScrolls--;

            if (numberOfScrolls > 0) {
                setTimeout(() => swapContent(content1, content2, content3, img1, img2, img3, numberOfScrolls), 200);
            }
        };

        const updateButtonListener = () => {
            generatorButton.addEventListener('click', generate);
        };

        swapContent(getContent('c1r1'), getContent('c2r1'), getContent('c3r1'), 'c1r1', 'c2r1', 'c3r1', getRandomNumber() + 5);
        swapContent(getContent('c1r2'), getContent('c2r2'), getContent('c3r2'), 'c1r2', 'c2r2', 'c3r2', getRandomNumber() + 5);
        swapContent(getContent('c1r3'), getContent('c2r3'), getContent('c3r3'), 'c1r3', 'c2r3', 'c3r3', getRandomNumber() + 5);

        generatorButton.removeEventListener('click', generate);

        setTimeout(() => {
            let c2r1Value = document.getElementById('c2r1').textContent.trim();
            let c2r2Value = document.getElementById('c2r2').textContent.trim();
            let c2r3Value = document.getElementById('c2r3').textContent.trim();
        
            if (c2r1Value === c2r2Value && c2r2Value === c2r3Value) {
                alert(`${userName}, you are the winner!`);
                countButtonPress = 0;
            } else if (countButtonPress === 3) {
                alert('Sorry, you lose. Try again!');
                countButtonPress = 0;
            }
            updateButtonListener();
        }, 3000);
    }

    function getRandomNumber() {
        return parseInt(Math.random() * 13);
    }
})();
