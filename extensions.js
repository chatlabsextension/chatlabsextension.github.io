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
