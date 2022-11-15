$().ready(function () {
    $("#alertStart").click(function () {
        Swal.fire({
            icon: 'success',
            title: '관심 목록에 등록되었습니다!',
            text: '내 프로필에서 확인하실 수 있습니다.',
        });
    });
});

checkAuction = function(){
    let money = document.getElementById("money").value;
    let pwd = document.getElementById("pwd").value;
    let agree = document.getElementById("agree");

    var passwdWarning = document.getElementById("passwdWarning");
    var moneyWarning = document.getElementById("moneyWarning");

    const is_checked = agree.checked;

    if (pwd.length <= 5){
        passwdWarning.innerHTML = `비밀번호가 너무 짧습니다.`;
    }

    if (money < 1000){
        moneyWarning.innerHTML = `금액이 너무 작습니다.`;
    }

    if(is_checked === false){
        $("#alertAuction").click(function () {
            Swal.fire({
                icon: 'error',
                title: '면책조항에 체크되지 않았습니다!',
                text: '면책조항에 체크해주세요.',
            });
        });
    }
    if(is_checked === true){
        if (pwd.length > 5 && money >= 1000){
            $("#alertAuction").click(function () {
                Swal.fire({
                    icon: 'success',
                    title: '경매에 참여되었습니다!',
                    text: '내 프로필에서 확인할 수 있습니다.',
                });
            });
        }
        }
        
    }
