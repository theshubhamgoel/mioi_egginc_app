import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
		padding: "10px 15px",

		"&>*": {
			margin: "10px 0px",
		}
	}
}))