import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/rootReducer";
import {getPosts} from '../../thunk/posts'
import Drawer from "../Drawer";
import Content from "../Content";

function App() {
  const dispatch = useDispatch()
  const posts = useSelector((state: RootState) => state.posts.data)
  const selected = useSelector((state: RootState) => state.posts.selected)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <>
      <Drawer posts={posts}>
        {selected?.title && <Content selected={selected} />}
      </Drawer>
    </>
  );
}

export default App;
