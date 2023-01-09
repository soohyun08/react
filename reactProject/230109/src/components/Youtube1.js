import axios from "axios";
import { useEffect } from "react";

function Youtube1() {
  const key = `AIzaSyCWxhvu-TPpVt6B8GhvSK-DHqCTBNuQ4Fs`;
  const playList = `PLMrYsAJWeMrtRW0Xh-AoVUERJrVGxyv0D`;
  const num = 3;
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

  useEffect(() => {
    axios.get(URL).then((json) => console.log(json.data.items));
  }, []);

  return (
    <>
      <h1>youtube1</h1>
    </>
  );
}

export default Youtube1;
