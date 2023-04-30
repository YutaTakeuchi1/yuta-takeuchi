function scrollToBottom(posScholar) {
  let downArrow=document.getElementById("arrows");

  // 最下部の位置を取得
  const pos = window.pageYOffset + window.innerHeight;

  if(pos <= document.documentElement.scrollHeight - window.innerHeight*2){
    window.scrollTo({ top: pos, behavior: 'smooth' });
  }
  else{
    window.scrollTo({ top: pos, behavior: 'smooth' });
    downArrow.style.display="none";
  }
}

function scrollToTop() {
  let downArrow=document.getElementById("arrows");
  window.scrollTo({ top: 0, behavior: 'smooth' });
  downArrow.style.display="block";
}