function LoaderStatus({ isLoading, children }) {
  return children(isLoading);
}

export default LoaderStatus;
