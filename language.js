// JSON 파일 경로 설정
const koreanTextPath = 'korean.json';
const englishTextPath = 'english.json';

// 기본 언어 설정 (한국어)
let currentLanguage = 'english';

// 버튼 클릭 이벤트 처리
const languageButton = document.getElementById('language-button');
languageButton.addEventListener('click', () => {
    // 언어 변경
    if (currentLanguage === 'korean') {
        currentLanguage = 'english';
    } else {
        currentLanguage = 'korean';
    }

    // JSON 파일 로드 및 텍스트 업데이트
    fetch(currentLanguage === 'korean' ? koreanTextPath : englishTextPath)
        .then(response => response.json())
        .then(data => {

            document.getElementById('profileTitle').textContent = data.profileTitle;
            document.getElementById('internships').textContent = data.internships;
            document.getElementById('education').textContent = data.education;
            document.getElementById('projects').textContent = data.projects;
        });
});
