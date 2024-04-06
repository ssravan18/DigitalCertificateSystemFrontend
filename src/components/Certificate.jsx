/* eslint-disable react/prop-types */
import { Typography, Paper} from '@mui/material';
import { dontOverflowText } from '../utils/prettyPrint';
import { Link } from 'react-router-dom';
import { sendRequest } from '../Services/HttpProvider';
const styles = {
	paperStyle : {
		"padding" : "1rem",
		"margin" : "10px"
	},

	divStyle : {
		display : "flex",
		justifyContent : "space-between"
	}
}

const Certificate = ({ title, issuer, issuanceDate, expiryDate, certificateURI }) => {
	const handleDownload = async () => {
		const {response} = sendRequest("/downloadcertificate", "POST", {
			"cid" : certificateURI
		})
		const blob = new Blob([response], {type: "application/pdf"});
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${title}.pdf`;
		a.click();
		window.URL.revokeObjectURL(url);
	}
  return (
    <Paper style={styles.paperStyle}>
		<div style={styles.divStyle}>
			<Typography variant="h5">{dontOverflowText(title, 30)}</Typography>
			<Link variant='body4' onClick={handleDownload}>Download</Link>
		</div>
		<Typography variant='body4'>{dontOverflowText(issuer, 20)}</Typography>
		<div style={styles.divStyle}>
		<Typography variant='body4'>Issued: {issuanceDate}</Typography>
		<Typography variant='body4'>Expires: {expiryDate}</Typography>
		</div>
    </Paper>
  );
};

export default Certificate;
