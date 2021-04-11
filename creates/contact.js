const createIssue = (z, bundle) => {
  const responsePromise = z.request({
    url: 'https://api-core.flowaccount.com/th/contacts',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'authorization': `Bearer ${bundle.authData.ACCESS_TOKEN}`
    },
    body: JSON.stringify({
      'name': bundle.inputData.ContactName
    }),
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'create_contact',
  noun: 'Create Contact',

  display: {
    label: 'Create Contact',
    description: 'Creates a Contact.'
  },

  operation: {
    inputFields: [
      {key: 'name', label:'Contact Name', required: true},
    ],
    perform: createIssue,
  }
};
