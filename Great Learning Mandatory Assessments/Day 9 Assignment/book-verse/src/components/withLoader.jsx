function withLoader(WrappedComponent) {
  return function LoaderComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <p className="text-center text-gray-500 mt-4">
          Loading...
        </p>
      );
    }
    return <WrappedComponent {...props} />;
  };
}

export default withLoader;
