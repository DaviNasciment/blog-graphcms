import { getPosts } from '../../services/graphcms'

import Link from "next/link";

import Page from '../../components/PageSEO'
import styles from './posts.module.scss';

export default function Posts( { posts } ) {
    return (
        <Page title="Posts - ClientName" description="ClientDesc" path="/posts">
            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map((post, index) => (
                    <Link key={post.node.slug}  href={`/posts/${post.node.slug}`}>
                        <a>
                            <time>
                                {new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long'}).format(
                                        new Date(post.node.createdAt))}
                            </time>
                            <strong className={styles.link}>
                                
                                    {post.node.title}
                                
                            </strong>
                            <p>{post.node.description}</p>
                        </a>
                    </Link>
                    ))}
                </div>
            </main>
        </Page>
    )
}

export async function getStaticProps() {
    const posts = (await getPosts()) || [];

    return {
        props: { posts },
        revalidate: 60,
    }
}