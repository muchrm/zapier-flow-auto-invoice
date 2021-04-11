const authentication = {
  type: 'custom',
  test: {
    url:
      'https://profile.flowaccount.com/users/me',
  },
  fields: [
    {
      label: 'API Key',
      key: 'api_key',
      type: 'string',
      required: true,
      helpText: 'Found on your my platform app.',
    },
  ]
};

const addApiKeyToHeader = (request, z, bundle) => {
  request.headers.Authorization = `Bearer ${bundle.authData.api_key}`;
  return request;
};

const handleHTTPError = (response, z) => {
  if (response.status >= 400) {
    throw new Error(`Unexpected status code ${response.status}`);
  }
  return response;
};

module.exports = {
  authentication,
  addApiKeyToHeader,
  handleHTTPError
}
