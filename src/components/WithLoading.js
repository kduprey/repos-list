import React from "react";

const WithLoading = (Component) => {
	const WithLoadingComponent = ({ isLoading, ...props }) => {
		if (!isLoading) return <Component {...props} />;
		return <p>Hold on, fetching data :)</p>;
	};
	return WithLoadingComponent;
};

export default WithLoading;
