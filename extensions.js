export const PlaceholderExtension = {
  type: 'extension',
  extensionType: 'effect',
  name: 'Placeholder',
  match: (message) => message.type === 'ext_placeholder' || message?.payload?.name === 'ext_placeholder',
  effect: (message) => {
    const chatDiv = document.getElementById("cd-widget");
    const shadowRoot = chatDiv.shadowRoot;
    const inputField = shadowRoot.querySelector(".cd-widget-text-input input");
    inputField.placeholder = message.payload.placeholder;
  },
};
