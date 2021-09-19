import ListItem from "@mui/material/ListItem";
import {Avatar, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from '@mui/material/List';

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

export default function ListComponent({posts, onClick}: {posts: [], onClick: (arg: object) => void}) {
  return (
    <List>
      {posts?.map((post: any) => {
        const { id, title, author, created_utc, thumbnail, num_comments, url } = post?.data
        return (
          <>
            <ListItem onClick={() => onClick({
              author,
              url: validateImage(url),
              title
            })}
              button key={id} style={{
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
              <Grid container xs={12}>
                <Typography mt={1}>{`${num_comments} comments`}</Typography>
              </Grid>
            </ListItem>
            <Divider />
          </>
        )
      })}
    </List>
  )
}