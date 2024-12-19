// merged script for meteors and stars effects
const animatedSection = document.querySelector('.animated-area');

function createMeteors() {
    const meteor = document.createElement('span');
    meteor.classList.add('meteor');

    let add = window.innerWidth < 700 ? 100 : 700;
    meteor.style.left = Math.random() * window.innerWidth + add + 'px';
    meteor.style.height = Math.floor(Math.random() * 160) + 70 + 'px';
    meteor.style.width = Math.floor(Math.random() * 1) + 2 + 'px';

    animatedSection.append(meteor);

    setTimeout(() => {
        meteor.remove();
    }, 3000);
}

function createStars() {
    let noOfStars = window.innerWidth < 700 ? 15 : 50;
    for (let i = 0; i < noOfStars; ++i) {
        const star = document.createElement('span');
        star.classList.add('star');

        let x = Math.floor(Math.random() * window.innerWidth),
            y = Math.floor(Math.random() * window.innerHeight),
            duration = Math.random() * 10,
            size = Math.random() * 2,
            z = Math.floor(Math.random() * 1) + 2;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = z + size + 'px';
        star.style.height = z + size + 'px';

        star.style.animationDuration = 5 + duration + 's';
        star.style.animationDelay = duration + 's';

        animatedSection.append(star);
    }
}

setInterval(createMeteors, 6000);
createStars();
