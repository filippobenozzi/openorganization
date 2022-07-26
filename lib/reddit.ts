export const getRedditComments = async (redditUrls) => {
  
  let comments = [];

  await Promise.all(
    redditUrls.map(async (url) => {
      const response = await fetch(`${url}.json`);
      const jsonResponse = await response.json();
      comments.push(jsonResponse);
    })
  );


  return comments.reduce((allComments, comment) => {

    const index_resolution = comment[0].data.children[0].data.preview?.images[0].resolutions;

    const tweetWithAuthor = {
      title: comment[0].data.children[0].data.title,
      subreddit: comment[0].data.children[0].data.subreddit_name_prefixed,
      url: comment[0].data.children[0].data.url,
      permalink: comment[0].data.children[0].data.permalink,
      width: comment[0].data.children[0].data.preview?.images[0].resolutions[index_resolution.length-2].width ? comment[0].data.children[0].data.preview?.images[0].resolutions[index_resolution.length-2].width : null,
      height: comment[0].data.children[0].data.preview?.images[0].resolutions[index_resolution.length-2].height ? comment[0].data.children[0].data.preview?.images[0].resolutions[index_resolution.length-2].height : null,
      author: comment[0].data.children[0].data.author,
      date: comment[0].data.children[0].data.created,
      tag: comment[0].data.children[0].data.link_flair_text,
      tag_color: comment[0].data.children[0].data.link_flair_background_color,
      ups: comment[0].data.children[0].data.ups,
      comments: comment[0].data.children[0].data.num_comments,
      id: comment[0].data.children[0].data.id,
      text: comment[0].data.children[0].data.selftext,
      video: comment[0].data.children[0].data.media?.reddit_video.fallback_url ? comment[0].data.children[0].data.media?.reddit_video.fallback_url : null,
      video2: comment[0].data.children[0].data.preview?.images[0].variants.mp4?.source.url ? (comment[0].data.children[0].data.preview?.images[0].variants.mp4?.source.url).replace(/amp;/g,'') : null,
    };

    return [tweetWithAuthor, ...allComments];
  }, []);

};