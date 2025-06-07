// 简单的交互功能：点击导航栏链接时滚动到对应部分
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('#todolist ul li').forEach(item => {
    item.addEventListener('click', function () {
        const description = this.querySelector('.todo-description');
        const arrow = this.querySelector('.arrow');

        if (description.classList.contains('open')) {
            description.classList.remove('open');
            arrow.classList.remove('open');
        } else {
            description.classList.add('open');
            arrow.classList.add('open');
        }
    });
});

let count=0;
document.getElementById('countButton').addEventListener('click', function(){
    count++;
    document.getElementById('count').textContent = count;
});