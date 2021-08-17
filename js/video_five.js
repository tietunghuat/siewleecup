var elevideo = document.getElementById("video-e");
elevideo.addEventListener('ended', function () { //播放中
    document.getElementById("teste").style.display = "block";
});

function check() {
    var c = 0;
    var q1 = document.test.question1.value;
    var q2 = document.test.question1.value;
    var q3 = document.test.question1.value;

    if (q1 == "1" && q2 == "1" && q3 == "1") {
        var yes = confirm("恭喜全對!你已完成所有習題！");
        if (yes == true) {
            window.location.href = 'online_five.html';
        }

    } else if (q1 != "1" || q2 != "1" || q3 != "1") {
        var no = alert("你的答案有誤哦，請在看影片複習");
        window.location.href = 'online_five.html';
    }
}