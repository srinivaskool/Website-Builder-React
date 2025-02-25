import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditableText from "../EditableText";
import EditImage from "../ImageEdit/EditImage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "20vw",
    // maxWidth: 300,
    marginRight: "0"
    // marginLeft: "10%"

    // marginLeft:"5%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    display: "inline-block",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function ReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ float: "center", display: "flex" }}>
      <Card
        className={classes.root}
        style={{ display: "inline-block", marginRight: "0", marginLeft: "14%" }}
      >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <EditableText fSize="25" text="R" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title=<EditableText fSize="17.5" text="Shrimp and Chorizo Paella" />
          subheader=<EditableText fSize="17.5" text="September 14, 2016" />
        />

        <EditImage
          className={classes.media}
          src="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <EditableText
              fSize="17.5"
              text="
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like."
            />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <EditableText fSize="20" text="Method:" />
            </Typography>
            <Typography paragraph>
              <EditableText
                fSize="20"
                text="
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes."
              />
            </Typography>
            <Typography paragraph>
              <EditableText
                fSize="20"
                text="
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil."
              />
            </Typography>
            <Typography paragraph>
              <EditableText
                fSize="20"
                text="
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)"
              />
            </Typography>
            <Typography>
              <EditableText
                fSize="20"
                text="
              Set aside off of the heat to let rest for 10 minutes, and then
              serve."
              />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card
        style={{
          display: "inline-block",
          marginLeft: "4.5%",
          marginRight: "4.5%"
        }}
        className={classes.root}
      >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <EditableText fSize="25" text="R" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title=<EditableText fSize="17.5" text="Shrimp and Chorizo Paella" />
          subheader=<EditableText text="September 14, 2016" />
        />
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <EditableText
              fSize="17.5"
              text="
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like."
            />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <EditableText fSize="20" text="Method:" />
            </Typography>
            <Typography paragraph>
              <EditableText
                fSize="20"
                text="
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes."
              />
            </Typography>
            <Typography paragraph>
              <EditableText
                fSize="20"
                text="
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil. "
              />
            </Typography>
            <Typography paragraph>
              <EditableText
                fSize="20"
                text="
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.) "
              />
            </Typography>
            <Typography>
              <EditableText
                fSize="20"
                text="
              Set aside off of the heat to let rest for 10 minutes, and then
              serve. "
              />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card style={{ display: "inline-block" }} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <EditableText fSize="25" text="R" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title=<EditableText fSize="17.5" text="Shrimp and Chorizo Paella" />
          subheader=<EditableText fSize="17.5" text="September 14, 2016" />
        />
        <CardMedia
          className={classes.media}
          image="https://miro.medium.com/max/6608/1*vPjKNWCkZ4Bp2pMp2oUesA.jpeg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <EditableText
              fSize="17.5"
              text="This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like."
            />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <EditableText fSize="20" text="Method:" />
            </Typography>
            <Typography paragraph>
              <EditableText
                fSize="20"
                text="
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes."
              />
            </Typography>
            <Typography paragraph>
              <EditableText
                fSize="20"
                text="
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil."
              />
            </Typography>
            <Typography paragraph>
              <EditableText
                fSize="20"
                text="
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)"
              />
            </Typography>
            <Typography>
              <EditableText
                fSize="20"
                text="
              Set aside off of the heat to let rest for 10 minutes, and then
              serve."
              />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
