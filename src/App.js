import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List";
import WithLoading from "./components/WithLoading";

const ListWithLoading = WithLoading(List);

const App = () => {
	const [status, setStatus] = useState({ loading: false, repos: [] });

	useEffect(() => {
		setStatus({ loading: true });
		axios.get("/api/getRepos").then((res) => {
			setStatus({ loading: false, repos: res.data });
		});
	}, []);
	return (
		<div>
			<ListWithLoading
				isLoading={status.loading}
				repos={status.repos}
			/>
		</div>
	);
};

export default App;
