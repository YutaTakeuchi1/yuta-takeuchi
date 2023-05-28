//クリックで下へスクロール
function scrollToBottom(posScholar) {
  let downArrow=document.getElementById("arrows");

  // 最下部の位置を取得
  const pos = window.pageYOffset + window.innerHeight;

  window.scrollTo({ top: pos, behavior: 'smooth' });

  if(0 >= document.documentElement.scrollHeight - pos){
    //スクロールしてページ最下部へ到達したとき、自動スクロール非表示
    downArrow.style.display="none";
  }
}

//TODO: スクロールイベントの性質上イベントが複数回走る対応
//マウスでのスクロール時の自動スクロールボタンの表示非表示
window.addEventListener('scroll', function() {
  let downArrow=document.getElementById("arrows");
  // 最下部の位置を取得
  const pos = window.pageYOffset + window.innerHeight;
  if (0 >= document.documentElement.scrollHeight - pos) {
    //スクロールしてページ最下部へ到達したとき、自動スクロール非表示
    downArrow.style.display="none";
  }
  else{
    //ページ最下部から上にスクロールしたとき、下へ移動する自動スクロール復活
    downArrow.style.display="block";
  }
});

//ページ最上部へ移動
function scrollToTop() {
  let downArrow=document.getElementById("arrows");
  window.scrollTo({ top: 0, behavior: 'smooth' });
  downArrow.style.display="block";
}