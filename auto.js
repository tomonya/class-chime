// デモ用に目標日時は来年1月1日
const thisYear = new Date().getFullYear();
const targetDate = new Date(thisYear + 1, 0, 1, 0, 0, 0, 0);

// 目標日時を指定（年, 月（0-11）, 日, 時, 分, 秒）
// const targetDate = new Date( 2023, 11, 1, 17, 0, 0 );
// 以下のように文字列型の日付フォーマットでもOK
// const targetDate = new Date( '2023/12/1 17:00:00' );

const ele = document.getElementById("countdown");

const countdown = () => {
  const now = new Date();
  const distance = targetDate - now;

  if (distance < 0) {
    ele.innerHTML = "カウントダウン終了！";
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const miliseconds = distance < 0 ? 0 : Math.floor(distance % 1000);

    ele.innerHTML = `${
      thisYear + 1
    }年まであと<br /><span class="days">${days.toLocaleString()}</span>日と<span class="hours">${String(
      hours
    ).padStart(2, "0")}</span>時間<span class="minutes">${String(
      minutes
    ).padStart(2, "0")}</span>分<span class="seconds">${String(
      seconds
    ).padStart(2, "0")}</span>.${String(miliseconds).padStart(3, "0")}秒`;
    window.requestAnimationFrame(countdown);
  }
};

window.requestAnimationFrame(countdown);
