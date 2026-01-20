export const REQUEST_DEMO_MUTATION = `
  mutation WebOperation($requestDemoInput: LeadInput!) {
    WebOperation(requestDemoInput: $requestDemoInput) {
      success
      message
      id
    }
  }
`;
