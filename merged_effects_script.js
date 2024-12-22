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
    }, 5000);
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


    function openProject(project) {
        var modalContent = '';
        switch (project) {
            case 'project1':
                modalContent = `
                    <h2>Website quảng cáo</h2>
                    <img src="Images/Yiko_47_wi92.com.jpg" alt="Website quảng cáo Image" class="responsive-img"/>
                    <iframe 
                        src="Assets/BTL_TKDHCB.pdf" 
                        style="width: 100%; height: 600px; border: none;" 
                        title="Website quảng cáo PDF"></iframe>
                    <p>Description for Website quảng cáo goes here.</p>
                `;
                break;
            case 'project2':
                modalContent = `
                    <h2>Website bán đồ chơi</h2>
                    <iframe 
                        src="Assets/BTL_TKW.pdf" 
                        style="width: 100%; height: 600px; border: none;" 
                        title="Website bán đồ chơi PDF"></iframe>
                    <p>Description for Website bán đồ chơi goes here.</p>
                `;
                break;
            case 'project3':
                modalContent = `
                    <h2>Thiết kế bìa sách truyện</h2>
                    <iframe 
                        src="Assets/BTL_LTW.pdf" 
                        style="width: 100%; height: 600px; border: none;" 
                        title="Thiết kế bìa sách truyện PDF"></iframe>
                    <p>Description for Thiết kế bìa sách truyện goes here.</p>
                `;
                break;
            case 'project4':
                modalContent = `
                    <h2>Mod texture Project Zomboid</h2>
                    <iframe 
                        src="Assets/BTL_UID.pdf" 
                        style="width: 100%; height: 600px; border: none;" 
                        title="Mod texture Project Zomboid PDF"></iframe>
                    <p>Description for Mod texture Project Zomboid goes here.</p>
                `;
                break;
            case 'project5':
                modalContent = `
                    <h2>Website bán laptop</h2>
                    <iframe 
                        src="Assets/BTL_PZ.pdf" 
                        style="width: 100%; height: 600px; border: none;" 
                        title="Website bán laptop PDF"></iframe>
                    <p>Description for Website bán laptop goes here.</p>
                `;
                break;
        }
        document.getElementById('modalBody').innerHTML = modalContent;
        document.getElementById('projectModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('projectModal').style.display = 'none';
    }
