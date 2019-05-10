import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MCard from "../Card/MCard";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  root: {
    flexGrow: 1,
    margin: "20px",
    height: "25rem"
  },
  paper: {
    padding: theme.spacing.unit * 4,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <div>
                Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsu
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </div>
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Know More
                </Button>
              </div>
            </Grid>
            <Grid item xs={6}>
            <Grid container spacing={24}>
            <Grid item xs={6}><MCard/></Grid>
            <Grid item xs={6}><MCard/></Grid>
            </Grid>
            <Grid container spacing={24}>
            <Grid item xs={6}><MCard/></Grid>
            <Grid item xs={6}><MCard/></Grid>
            </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Content.protoType = {
  classes: PropTypes.shape().isRequired
};
export default withStyles(styles)(Content);
