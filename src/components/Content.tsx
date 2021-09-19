import Typography from "@mui/material/Typography";
import {Avatar} from "@mui/material";

export default function Content({selected}: {selected: {
  author: string,
  url: string,
  title: string
  }}) {
  const {author, url, title} = selected

  return <>
    <Typography paragraph >
      Posted by {author}
    </Typography>
    <Typography paragraph variant={'h5'} mb={8}>
      Title: {title}
    </Typography>
    {url && <Avatar
      src={url}
      alt="Image from post"
      sx={{ width: '100%', height: 'auto' }}
      variant="square" />}
  </>
}