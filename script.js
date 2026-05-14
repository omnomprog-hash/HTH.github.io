async function loadChat() {
  const res = await fetch("data.json");
  const data = await res.json();

  const chat = document.getElementById("chat");
  chat.innerHTML = "";

  data.messages.forEach(m => {
    const div = document.createElement("div");
    div.textContent = m.user + ": " + m.text;
    chat.appendChild(div);
  });
}

function send() {
  const input = document.getElementById("msg");
  const text = input.value;

  if (!text) return;

  alert("GitHub API нужен для отправки (следующий шаг)");

  input.value = "";
}

setInterval(loadChat, 2000);
loadChat();
