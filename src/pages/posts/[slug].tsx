import { useRouter } from "next/router";
import { getPostDetails, getPosts } from "../../services/graphcms"

import Page from '../../components/PageSEO'
import styles from './posts.module.scss';

const PostDetails = ( { post } ) => {

    const router = useRouter();
  
    if (router.isFallback) {
      return (
        <div className={styles.isFallback}>
          <h1>Carregando...</h1>
        </div>
      )
    }
  
    if(!post) return null
  
    return (
      <Page title={"Post - " + post.title}  description={post.seo} path={"/posts/" + post.slug}>
        <div className={styles.container}>
            <div className={styles.posts}>
                <h1 className={styles.titleSlug}>{post?.title }</h1>
                <time className={styles.time}>
                {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long'}).format(new Date(post.createdAt))}
                </time>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content.html }} />
            </div>
        </div>
      </Page>
    )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);

    return {
      props: {
        post: data,
      },
      revalidate: 60,
    };
}
export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
}