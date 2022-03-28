import ImageGallery from "react-image-gallery";
import Plyr from "plyr-react";
import Image from "next/image";

export async function getServerSideProps(context) {
    // array of posts
    const posts = [
        {
            id: 1,
            user: {
                name: "Bill Gates",
                avatar:
                    "https://cdn-icons-png.flaticon.com/512/147/147144.png",
            },
            imageURLs: [
                {
                    original:
                        "https://picsum.photos/id/1018/1000/600/",
                },
                {
                    original:
                        "https://picsum.photos/id/1015/1000/600/",
                },
                {
                    original:
                        "https://picsum.photos/id/1019/1000/600/",
                },
            ],
            description:
                "Lorem ipsum dolor sit amet, consect",
        }];

    return {
        props: {
            posts
        }
    }
}

export default function Feed({ posts }) {
    return (
        <div className="feed">
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}

function Post({ post }) {
    return (
        <div className="post">
            <ImageGallery items={post.imageURLs} showPlayButton={false} showIndex={true} />
            <div className="post__content">
                <Image
                    src={post.user.avatar}
                    alt="avatar"
                    width={48}
                    height={48}
                />
                <p>{post.user.name}</p>
                <p>{post.description}</p>
            </div>
        </div>
    );
}