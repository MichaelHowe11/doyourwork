async function pointsCounter() {
    let element = document.getElementById('seconds');
    let mElement = document.getElementById('minutes');
    let hElement = document.getElementById('hours');
    let counter = 0;
    let mCounter = 0;
    let hCounter = 0;

    const DEF_DELAY = 1000;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
    }

    while (true) {
        await sleep(1000);
        if (counter === 59) {
            counter = -1;
            element.innerHTML = '0';
            mCounter++;
            if (mCounter % 15 === 0) {
                fetch('https://api.ipify.org?format=json')
                    .then(response => response.json())
                    .then(data => {
                        window.alert(`Ready to do your work?\nI know your IP, I will DDOS if you don't do your work.\nYour IP: ` + data.ip);
                        window.open(`https://classroom.google.com`);
                        console.log(data.ip);
                    })
                    .catch(error => {
                        console.log('Error:', error);
                    });
                
            }
            if (mCounter === 60) {
                mCounter = 0;
                mElement.innerHTML = '0';
                hCounter++;
                // if (hCounter >= 1) {
                //     window.alert(`Ready to do your work?`);
                //     window.open(`https://classroom.google.com`);
                // }
            }
        }
        counter++;
        element.innerHTML = counter;
        mElement.innerHTML = mCounter;
        hElement.innerHTML = hCounter;
    }

}

// WE'RE BORROWING IT MR FAST PLS DONT REMOVE MY PORFOESOINAL POIONRTS 🙏