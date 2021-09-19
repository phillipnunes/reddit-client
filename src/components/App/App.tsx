import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/rootReducer";
import {getPosts} from '../../thunk/posts'
import Drawer from "../Drawer";
import Content from "../Content";

function App() {
  const dispatch = useDispatch()
  const posts = useSelector((state: RootState) => state.posts.data)

  console.log('POSTS', posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])
  return (
    <>
      <Drawer posts={posts}>
        <Content />
      </Drawer>
    </>
  );
}

export default App;
