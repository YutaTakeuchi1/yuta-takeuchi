//クリックで下へスクロール
function scrollToBottom(posScholar) {
  let downArrow=document.getElementById("arrows");

  // 最下部の位置を取得
  const pos = window.pageYOffset + window.innerHeight;

  if(0 >= document.documentElement.scrollHeight - pos){
    window.scrollTo({ top: pos, behavior: 'smooth' });
    downArrow.style.display="none";
    console.log("ページの最下部にスクロールされました自動");
  }
  else{
    window.scrollTo({ top: pos, behavior: 'smooth' });
  }
}

//TODO: スクロールイベントの性質上イベントが複数回走る対応
//マウスでのスクロール時の自動スクロールボタンの表示非表示
window.addEventListener('scroll', function() {
  let downArrow=document.getElementById("arrows");
  // 最下部の位置を取得
  const pos = window.pageYOffset + window.innerHeight;
  if (0 >= document.documentElement.scrollHeight - pos) {
    // ページの最下部にスクロールされた場合の処理をここに記述します
    console.log("ページの最下部にスクロールされました手動");
    downArrow.style.display="none";
  }
  else{
    downArrow.style.display="block";
  }
});

function scrollToTop() {
  let downArrow=document.getElementById("arrows");
  window.scrollTo({ top: 0, behavior: 'smooth' });
  downArrow.style.display="block";
}