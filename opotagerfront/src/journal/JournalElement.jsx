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

const JournalElement = ({
  titre,
  description,
  image,
  location,
  date,


})  => {
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
        title={location}
        header={location}
        subheader={date}
      />
      <img
        height="300"
        src={image}
        alt={titre}
      />
      <CardContent>
      <Typography paddingBottom={1} variant="h5" color="text.secondary">
         {titre}
        </Typography>
        <hr />
        <Box paddingTop={1}>
        <Typography fontWeight="bold">Gwendoline Deneuchatel</Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
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
