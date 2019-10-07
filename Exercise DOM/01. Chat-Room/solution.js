function solve() {
   let button = document.getElementById("send");
   let chatBox = document.getElementById("chat_messages");
   let textArea = document.getElementById("chat_input");
   if(button === null || chatBox === null || textArea === null){
      throw new Error("HTML element is missing!");
   }
   button.addEventListener("click", sendMessage);
   function sendMessage() {
      let text = textArea.value;
      let div = document.createElement("div");
      div.classList.add("message", "my-message");
      div.textContent = text;
      chatBox.appendChild(div);
      textArea.value = "";
   }
}


