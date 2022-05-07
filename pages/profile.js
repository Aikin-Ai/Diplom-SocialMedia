/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, Divider } from "@mui/material";
import { useSession, signIn } from "next-auth/react";
import Post from "./components/post";

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
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
                },
                {
                    original:
                        "https://picsum.photos/id/1019/1000/600/",
                },
            ],
            description:
                "Lorem ipsum dolor sit amet, consect",
            likes: 10,
            reposts: 5,
        },
        {
            id: 2,
            user: {
                name: "Gill Bates",
                avatar:
                    "https://cdn-icons-png.flaticon.com/512/147/147142.png",
            },
            imageURLs: [
                {
                    original:
                        "https://picsum.photos/id/1018/1000/600/",
                },
                {
                    original:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png",
                },
                {
                    original:
                        "https://picsum.photos/id/1019/1000/600/",
                },
            ],
            description:
                "Lorem ipsum dolor sit amet, consect",
            likes: 15,
            reposts: 2,
        }];

    return {
        props: {
            posts
        }
    }
}

export default function Profile({ posts }) {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="container">
                <div className="profile__name">
                    <h1>{session.user.name}</h1>
                </div>
                <div className="profile__posts">
                    <h2>Latest posts:</h2>
                    {posts.map(post => (
                        <>
                            <Post key={post.id} post={post} />
                            <br key={post.id + 100} />
                        </>
                    ))}
                </div>
                <Card className="profile__information">
                    <div className="profile__image">
                        <img src={session.user.image} alt="user avatar" />
                    </div>
                    <div className="profile__name2">
                        @{session.user.login}
                    </div>
                    <div className="profile__email">
                        <b>Email:</b> {session.user.email}
                    </div>
                    <div className="profile__city">
                        <b>Location:</b> {session.user.location}
                    </div>
                    <div className="profile__gender">
                        <b>Gender:</b> Male
                    </div>
                    <div className="profile__dob">
                        <b>DOB:</b> 10.01.2002
                    </div>
                </Card>
            </div>
        )
    } else {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 64px)",
            }}>
                <h1>
                    <a onClick={signIn}>You must be logged in to view this page</a>
                </h1>
            </div>
        )
    }
}