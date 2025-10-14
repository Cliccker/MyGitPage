let gameData = [];
let currentIndex = 0;
let knownWords = new Set(); // 用于存储已知的词语

const termElement = document.getElementById('term');
const categoryElement = document.getElementById('category');
const meaningElement = document.getElementById('meaning');
const toggleMeaningButton = document.getElementById('toggleMeaning');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

function displayCard(index) {
    // 确保数据已加载且索引有效
    if (gameData.length === 0 || index < 0 || index >= gameData.length) {
        console.error('Invalid index or data not loaded yet');
        return;
    }
    const data = gameData[index];
    termElement.textContent = data.term;
    categoryElement.textContent = data.category;
    meaningElement.textContent = data.meaning;
    meaningElement.style.display = 'none'; // 默认隐藏释义
    toggleMeaningButton.textContent = '显示释义';
}

function toggleMeaning() {
    if (meaningElement.style.display === 'none') {
        meaningElement.style.display = 'block';
        toggleMeaningButton.textContent = '隐藏释义';
    } else {
        meaningElement.style.display = 'none';
        toggleMeaningButton.textContent = '显示释义';
    }
}

function showNextCard() {
    do {
        currentIndex = (currentIndex + 1) % gameData.length;
    } while (knownWords.has(gameData[currentIndex].term) && currentIndex !== 0);
    displayCard(currentIndex);
}

function showPrevCard() {
    do {
        currentIndex = (currentIndex - 1 + gameData.length) % gameData.length;
    } while (knownWords.has(gameData[currentIndex].term) && currentIndex !== gameData.length - 1);
    displayCard(currentIndex);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function markAsKnown() {
    knownWords.add(gameData[currentIndex].term);
    // 移除已知的词语
    gameData = gameData.filter(item => !knownWords.has(item.term));
    if (gameData.length === 0) {
        termElement.textContent = '所有词语都已掌握!';
        categoryElement.textContent = '';
        meaningElement.textContent = '';
        meaningElement.style.display = 'none';
        toggleMeaningButton.style.display = 'none';
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
        knownBtn.style.display = 'none';
    } else {
        // 调整当前索引
        if (currentIndex >= gameData.length) {
            currentIndex = gameData.length - 1;
        }
        displayCard(currentIndex);
    }
}

const knownBtn = document.getElementById('knownBtn');

toggleMeaningButton.addEventListener('click', toggleMeaning);
prevButton.addEventListener('click', showPrevCard);
nextButton.addEventListener('click', showNextCard);
knownBtn.addEventListener('click', markAsKnown);

// 在数据加载完成后初始化显示第一张卡片
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        gameData = data.map(item => ({
            term: item.term,
            category: item.categories.join(' '),
            meaning: item.meaning
        }));
        // 打乱词语顺序
        shuffleArray(gameData);
        if (gameData.length > 0) {
            displayCard(currentIndex); // 数据加载完成后调用
        }
    })
    .catch(error => console.error('Error loading questions:', error));