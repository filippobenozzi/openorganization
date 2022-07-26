import { useMDXComponent } from 'next-contentlayer/hooks';
import { getTweets } from 'lib/twitter';
import components from 'components/MDXComponents';
import BlogLayout from 'layouts/blog';
import Tweet from 'components/Tweet';
import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';

export default function Post({ post, tweets, github }: { post: Blog; tweets: any[], github: any[] }) {
  const Component = useMDXComponent(post.body.code);
  const StaticTweet = ({ id }) => {
    const tweet = tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  return (
    <BlogLayout post={post} github={github}>
      <Component
        components={
          {
            ...components,
            StaticTweet
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  const tweets = await getTweets(post.tweetIds);

  const res = await fetch(`https://api.github.com/repos/filippobenozzi/filippo.im/commits?path=/data/blog/${params.slug}.mdx`);
  const github = await res.json();

  return { props: { post, tweets, github } };
}