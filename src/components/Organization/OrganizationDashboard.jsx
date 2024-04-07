import { AppBar, Button, Toolbar, Typography, Avatar, Menu, MenuItem, Container, Grid, Card} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomAppBar from "../CustomAppBar";


const styles = {
    gridStyle : {
        padding : "1rem",
        textAlign : "center"
    },

    containerStyle : {
        // backgroundColor : "#3498db", 
        padding : "1rem",
        paddingTop : "8rem",
        borderRadius : "1rem"
    }
}
function OrganizationDashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

  return (
    <div style={{width : "100vw", height : "100vh", backgroundColor : "#eeeeee"}}>

    <CustomAppBar title={"Organization Dashboard"}/>
    <Container style={styles.containerStyle}>
        <Grid container spacing={2}>
                <Grid item xs={12} sm={6} style={styles.gridStyle}>
                <Link to={"/issue"}>
                <Card style={{display : "flex", alignItems : "center"}}>
                    <img src="src/assets/images/IssueCertificateImage.gif" style={{width : "10rem", padding : "1rem"}}></img>
                    <div>
                    <Typography variant='h3'>Issue</Typography>
                    <Typography variant="h5" paragraph>
                        Generate/Issue Digital Certificates
                    </Typography>
                    </div>
                </Card>
                </Link>
                </Grid>
                <Grid item xs={12} sm={6} style={styles.gridStyle}>
                <Link to={"/verify"}>
                <Card style={{display : "flex", alignItems : "center"}}>
                    <img src="src/assets/images/verifyCertificateImageGIF.gif" style={{width : "13.25rem"}}></img>
                    <div style={{marginLeft : "2rem"}}>
                    <Typography variant='h3'>Verify</Typography>
                    <Typography variant="h5" paragraph>
                        Verify Digital Certificates
                    </Typography>
                    </div>
                </Card>
                </Link>
                </Grid>
        </Grid>
    </Container>
    </div>
  );
}
export default OrganizationDashboard;
