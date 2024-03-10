function toggleAnswer(answerId, iconId) {
    const answer = document.getElementById(answerId);
    const icon = document.getElementById(iconId);
  
    if (answer.style.maxHeight === '0px' || answer.style.maxHeight === '') {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      icon.classList.add('expanded');
    } else {
      answer.style.maxHeight = '0';
      icon.classList.remove('expanded');
    }
  }
  