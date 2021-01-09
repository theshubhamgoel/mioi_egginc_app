import React from "react"
import {SvgIcon, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {SvgIconComponent} from "@material-ui/icons";

const useStyle = makeStyles(theme => ({
	root: {
		display: "grid",
		gridTemplateColumns: "auto 1fr",
		flex: "0 1 0px",
		flexBasis: "auto",
		alignItems: "center",
		gap: "10px",
		justifyContent: "space-between",
	},
	icon: {
		width: "36px",
		height: "36px",
	}
}))

export default function IconLabel(props: { icon: SvgIconComponent; label: string | number }) {
	const classes = useStyle()
	return (
		<div className={classes.root}>
			<SvgIcon className={classes.icon} fontSize="large" color="secondary" component={props.icon}/>
			<Typography variant="h6">{props.label}</Typography>
		</div>
	)
}