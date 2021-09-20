import {Avatar, Button, Grid, List, Typography, ListItem, ListItemText, Divider, Collapse} from "@mui/material";
import { TransitionGroup } from 'react-transition-group';

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  const now = new Date()

  const diff = Math.abs(now.getTime() - date.getTime())
  const dateInDays = Math.ceil(diff / (1000 * 3600))

  return dateInDays
}

const validateImage = (url: string) => {
  return (url.match(/\.(jpeg|jpg|gif|png)$/) !== null) ? url : null;
}

export default function ListComponent({posts, onClick, onRemove}: {posts: [], onClick: (arg: object) => void, onRemove: (arg: string) => void}) {
  return (
    <List>
      <TransitionGroup>
        {posts?.map((post: any) => {
          const { id, title, author, created_utc, thumbnail, num_comments, url } = post?.data
          return (
            <Collapse key={id}>
              <ListItem
                onClick={() => onClick({
                  author,
                  url: validateImage(url),
                  title
                })}
                button
                style={{
                  flexDirection: 'column',
                }}>
                <Grid container xs={12}>
                  <Grid item md={11} >
                    <Typography mb={1}>{`Posted by ${author} ${formatDate(created_utc)} hours ago`}</Typography>
                  </Grid>
                  <Grid item md={1}>
                    <Typography mb={1}>Unread</Typography>
                  </Grid>
                </Grid>
                <Grid container xs={12} alignItems='center'>
                  <Grid item md={2}>
                    <Avatar src={thumbnail} alt="Post image" sx={{ width: 56, height: 56 }} />
                  </Grid>
                  <Grid item md={10}>
                    <ListItemText primary={title} />
                  </Grid>
                </Grid>
                <Grid container xs={12} >
                  <Typography mt={1}>{`${num_comments} comments`}</Typography>
                </Grid>
              </ListItem>
              <Button onClick={() => onRemove(id)} sx={{margin: '0 0 15px 15px'}} size="small" variant="contained" >Remove</Button>
              <Divider />
            </Collapse>
          )
        })}
      </TransitionGroup>
    </List>
  )
}