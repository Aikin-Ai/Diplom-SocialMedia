/* eslint-disable @next/next/no-img-element */
import { Button, Card, CardContent, Divider, IconButton } from "@mui/material";
import { useSession, signIn } from "next-auth/react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Post from "./components/post";

export async function getServerSideProps(context) {
    // array of posts
    const posts = [
        {
            id: 1,
            user: {
                name: "Andrey Reznikov",
                avatar:
                    "https://avatars.githubusercontent.com/u/30435253?v=4",
            },
            imageURLs: [
                {
                    original:
                        "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg",
                },
                {
                    original:
                        "https://cdn.pixabay.com/photo/2020/01/11/16/29/animal-4758004_960_720.jpg",
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
                name: "Andrey Reznikov",
                avatar:
                    "https://avatars.githubusercontent.com/u/30435253?v=4",
            },
            imageURLs: [
                {
                    original:
                        "https://cdn.pixabay.com/photo/2016/12/06/01/26/colour-1885352_960_720.jpg",
                },
                {
                    original:
                        "https://cdn.pixabay.com/photo/2018/03/30/18/48/potion-3276168_960_720.jpg",
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
                <div className="profile__posts">
                    <h2>Последние посты:</h2>
                    {posts.map(post => (
                        <>
                            <Post post={post} height={"400px"} />
                            <br />
                        </>
                    ))}
                </div>
                <Card className="profile__information">
                    <div className="profile__image">
                        <img src={session.user.image} alt="user avatar" />
                    </div>
                    {/* visible if user on his page */}
                    <div className="profile__modify__button">
                        <Button variant="outlined">
                            Изменить профиль
                        </Button>
                    </div>
                    <div className="profile__name">
                        <h2>{session.user.name}</h2>
                    </div>
                    {/* visible only if user on someone else's page */}
                    <div className="profile__pm__button">
                        <IconButton>
                            <MailOutlineIcon />
                        </IconButton>
                    </div>
                    <div className="profile__login">
                        @{session.user.login ? (
                            session.user.login
                        ) : (
                            session.user.name
                        )}
                    </div>
                    <div className="profile__dob">
                        <b>Дата рождения:</b><br/>10.01.2002
                    </div>
                    <div className="profile__email">
                        <b>Email:</b><br/>
                        {session.user.email}
                    </div>
                    <div className="profile__followers">
                        <b>Подписчиков:</b><br/>0
                    </div>
                    <div className="profile__following">
                        <b>Подписок:</b><br/>0
                    </div>
                    {/* visible if user on his page */}
                    <div className="profile__new_post__button">
                        <Button variant="contained" fullWidth>
                            <b>Написать пост</b>
                        </Button>
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
                    <a onClick={signIn}>Вы должны войти, чтобы просмотреть эту страницу</a>
                </h1>
            </div>
        )
    }
}