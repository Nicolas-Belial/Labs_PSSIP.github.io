// Configuration
const messages = [
    {
      id: 1,
      text: 'для заказа нашей продукции вам следует перейти в раздел конструктор!',
      showOnce: false,
      interval: 100000 
    },
    {
      id: 2,
      text: 'Посетите наш сайт-партнер и получите скидку 10% на первый заказ!',
      showOnce: true,
      interval: 360000 // 1 hour
    }
  ];
  let currentMessageIndex = 0;
  
  // Function to show the next message
  function showNextMessage() {
    if (currentMessageIndex >= messages.length) {
      currentMessageIndex = 0;
    }
  
    const message = messages[currentMessageIndex];
    if (!message.showOnce || !localStorage.getItem(`message_${message.id}`)) {
      alert(message.text);
      localStorage.setItem(`message_${message.id}`, true);
    }
  
    currentMessageIndex++;
    setTimeout(showNextMessage, message.interval);
  }
  
  // Start the script
  showNextMessage();