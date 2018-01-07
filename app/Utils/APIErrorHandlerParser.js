// ------------------------------------
// Handler Types
// ------------------------------------
export const HANDLER_TYPES = {
  POPUP: 'POPUP',
};

// ------------------------------------
// Configuration Generators
// ------------------------------------
export function generatePopupConfiguration(
  titleKey,
  messageKey,
  acceptButtonObj = { name: 'btn-ok' },
  cancelButtonObj,
) {
  var actions = [];

  if (acceptButtonObj) {
    actions.push(acceptButtonObj);
  }

  if (cancelButtonObj) {
    actions.push(cancelButtonObj);
  }

  return {
    title: { template: titleKey },
    body: { template: messageKey },
    actions: actions,
  };
}
