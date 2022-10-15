import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Box } from "@mui/system";

const JournalElement = () => {
  return (
    <Card
      sx={{
        width: "30%",
        height: "60%",
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10p #ccc",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            G
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {<DriveFileRenameOutlineIcon />}
          </IconButton>
        }
        title="Le potager de gwen"
        subheader="15 Octobre 2022"
      />
      <img
        height="300"
        src="https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356__340.jpg"
        alt="Paella dish"
      />
      <CardContent>
      <Typography paddingBottom={1} variant="h5" color="text.secondary">
          Lorem ipsum dolor sit amet. 
        </Typography>
        <hr />
        <Box paddingTop={1}>
        <Typography fontWeight="bold">Gwendoline Deneuchatel</Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper
          neque ac aliquam tempor. Phasellus a arcu tortor. Vestibulum ac elit
          rutrum, maximus quam eget, scelerisque ligula. Nulla non odio
          eleifend, tincidunt magna ac, porta felis. Quisque sodales, est et
          varius lobortis, tortor mauris facilisis nulla, et placerat ex neque
          et est. Quisque sollicitudin augue at est gravida, vitae fringilla
          nisi venenatis. Aenean sed consectetur odio.
        </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share"></IconButton>
      </CardActions>
      <CardActions sx={{marginLeft:'auto'}}>
        <Button sx={{mr:2, color:"#21b6ae"}}>Editer</Button>
        <Button sx={{mr:2, color:"#21b6ae"}}>Effacer</Button>
        </CardActions>
    </Card>

  );
};

export default JournalElement;
