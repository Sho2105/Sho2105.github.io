// Merged script for meteors and stars effects
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
                <h2>Thiết Kế Bìa Truyện Vagabond</h2>
                <img src="Images/Yiko_47_wi92.com.jpg" alt="Thiết Kế Bìa Truyện Vagabond" class="responsive-img"/>
                <iframe 
                    src="Assets/BTL_TKDHCB.pdf" 
                    style="width: 100%; height: 600px; border: none;" 
                    title="Thiết Kế Bìa Truyện Vagabond PDF"></iframe>
                <p>Dự án sử dụng Adobe Illustrator để thiết kế bìa truyện Vagabond với phong cách sáng tạo và nghệ thuật.</p>
            `;
            break;
        case 'project2':
            modalContent = `
                <h2>Website Quảng Cáo và Bán Digital Game</h2>
                <iframe 
                    src="Assets/BTL_TKW.pdf" 
                    style="width: 100%; height: 600px; border: none;" 
                    title="Website Quảng Cáo và Bán Digital Game PDF"></iframe>
                <p>Dự án thiết kế website để quảng bá và bán các sản phẩm game kỹ thuật số, với giao diện hiện đại và trực quan.</p>
            `;
            break;
        case 'project3':
            modalContent = `
                <h2>Website Bán Đồ Chơi Thú Cưng</h2>
                <iframe 
                    src="Assets/BTL_LTW.pdf" 
                    style="width: 100%; height: 600px; border: none;" 
                    title="Website Bán Đồ Chơi Thú Cưng PDF"></iframe>
                <p>Website thương mại điện tử chuyên về đồ chơi và phụ kiện cho thú cưng, được thiết kế với giao diện thân thiện và dễ sử dụng.</p>
            `;
            break;
        case 'project4':
            modalContent = `
                <h2>Giao Diện Ứng Dụng Đọc Sách</h2>
                <iframe 
                    src="Assets/BTL_UID.pdf" 
                    style="width: 100%; height: 600px; border: none;" 
                    title="Giao Diện Ứng Dụng Đọc Sách PDF"></iframe>
                <p>Thiết kế giao diện ứng dụng đọc sách bằng Figma, tập trung vào trải nghiệm người dùng với cách bố trí khoa học và trực quan.</p>
            `;
            break;
        case 'project5':
            modalContent = `
                <h2>Mod Texture Project Zomboid</h2>
                <iframe 
                    src="Assets/BTL_PZ.pdf" 
                    style="width: 100%; height: 600px; border: none;" 
                    title="Mod Texture Project Zomboid PDF"></iframe>
                <p>Dự án mod texture cho Project Zomboid, sử dụng Blender để tạo và chỉnh sửa texture, mang đến diện mạo mới cho trò chơi.</p>
            `;
            break;
    }
    document.getElementById("modalBody").innerHTML = modalContent;
    document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}
