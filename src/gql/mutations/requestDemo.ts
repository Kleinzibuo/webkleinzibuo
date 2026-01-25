export const REQUEST_DEMO_MUTATION = `
  mutation WebOperation($requestDemoInput: LeadInput!) {
    requestDemo(lead: $requestDemoInput)
  }
`;
