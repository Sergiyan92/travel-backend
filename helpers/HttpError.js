const ErrorMessageList = {
  400: "Bad request",
};

const HttpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
