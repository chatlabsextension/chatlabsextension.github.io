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


export const PlaceholderExtension = {
  name: "Placeholder",
  type: "effect",
  match: ({ trace }) =>
    trace.type === "ext_placeholder" || trace.payload.name === "ext_placeholder",
  effect: ({ trace }) => {
    const chatDiv = document.getElementById("voiceflow-chat");
    const shadowRoot = chatDiv.shadowRoot;
    const textarea = shadowRoot.querySelector("textarea");
    textarea.placeholder = trace.payload.placeholder;
  },
};
