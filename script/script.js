document.addEventListener('DOMContentLoaded', function() {
  // 로고 사라짐
  setTimeout(function() {
    document.getElementById('logo').style.display = 'none';
    let mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
    
    // h1과 h2에 fadeIn 애니메이션 추가
    let h1 = document.querySelector('h1');
    let h2 = document.querySelector('h2');
    h1.classList.add('fadeIn');
    h2.classList.add('fadeIn');
    
    // h1과 h2 애니메이션이 끝난 후 실행될 콜백 함수
    setTimeout(function() {
      // Website 버튼 서서히 나타나게 설정
      let websiteButton = document.querySelector('.website-button');
      websiteButton.classList.add('fadeIn');
      
      // Website 버튼 애니메이션이 끝난 후 실행될 콜백 함수
      setTimeout(function() {
        // 동영상 컨테이너 서서히 나타나게 설정
        let videoContainer = document.querySelector('.video-container');
        videoContainer.classList.add('fadeIn');
      }, 1000); // Website 버튼이 나타나는 데 걸리는 시간 후 실행
    }, 2000); // h1과 h2가 나타나는 데 걸리는 시간 후 실행
  }, 2000); // 초기 로고가 사라지는 데 걸리는 시간
});
