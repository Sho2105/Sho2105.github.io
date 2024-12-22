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

// Project modal handling
function openProject(project) {
    var modalContent = '';
    switch (project) {
        case 'project1':
            modalContent = `
                <h2>Thiết kế bìa truyện Vagabond</h2>
                <img src="Images/Yiko_47_wi92.com.jpg" alt="Thiết kế bìa truyện Vagabond" class="responsive-img"/>
                <iframe 
                    src="Assets/BTL_TKDHCB.pdf" 
                    style="width: 100%; height: 600px; border: none;" 
                    title="Thiết kế bìa truyện Vagabond PDF"></iframe>
                <p>Dự án thiết kế bìa truyện tranh Vagabond bằng phần mềm Adobe Illustrator, tập trung vào chi tiết và sự sáng tạo để thể hiện nét độc đáo của tác phẩm.</p>
            `;
            break;
        case 'project2':
            modalContent = `
                <h2>Thiết kế website quảng cáo và bán digital game</h2>
                <iframe 
                    src="Assets/BTL_TKW.pdf" 
                    style="width: 100%; height: 600px; border: none;" 
                    title="Thiết kế website bán digital game PDF"></iframe>
                <p>Dự án thiết kế website nhằm quảng bá và bán các sản phẩm game kỹ thuật số, kết hợp giao diện hiện đại và thân thiện với người dùng.</p>
            `;
            break;
        case 'project3':
            modalContent = `
                <h2>Website bán đồ chơi thú cưng</h2>
                <iframe 
                    src="Assets/BTL_LTW.pdf" 
                    style="width: 100%; height: 600px; border: none;" 
                    title="Website bán đồ chơi thú cưng PDF"></iframe>
                <p>Phát triển website thương mại điện tử chuyên về đồ chơi và phụ kiện cho thú cưng, tích hợp tính năng tìm kiếm và thanh toán tiện lợi.</p>
            `;
            break;
        case 'project4':
            modalContent = `
                <h2>Giao diện ứng dụng đọc sách</h2>
                <iframe 
                    src="Assets/BTL_UID.pdf" 
                    style="width: 100%; height: 600px; border: none;" 
                    title="Giao diện ứng dụng đọc sách PDF"></iframe>
                <p>Thiết kế giao diện ứng dụng đọc sách bằng Figma, tập trung vào trải nghiệm người dùng tối ưu với cách bố trí khoa học và dễ nhìn.</p>
            `;
            break;
        case 'project5':
            modalContent = `
                <h2>Mod texture Project Zomboid</h2>
                <iframe 
                    src="Assets/BTL_PZ.pdf" 
                    style="width: 100%; height: 600px; border: none;" 
                    title="Mod texture Project Zomboid PDF"></iframe>
                <p>Tạo và chỉnh sửa texture cho Project Zomboid bằng Blender, nâng cấp hình ảnh trò chơi.</p>
            `;
            break;
    }
    document.getElementById('modalBody').innerHTML = modalContent;
    document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}
