/* eslint-disable @next/next/no-img-element */
import { Button, Card, IconButton } from "@mui/material";
import { useSession, signIn } from "next-auth/react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import Post from "./components/post";
import React from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles'

const Input = styled('input')({
    display: 'none',
});

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
                "Тестовый текст",
            likes: 10,
            reposts: 5,
            comments: [
                {
                    id: 1,
                    user: {
                        name: "Bill Gates",
                        avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                    },
                    text: "Тестовый комментарий",
                },
                {
                    id: 2,
                    user: {
                        name: "Gill Bates",
                        avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
                    },
                    text: "Тестовый комментарий",
                },
                {
                    id: 3,
                    user: {
                        name: "Gill Bates",
                        avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
                    },
                    text: "Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.",
                },
                {
                    id: 4,
                    user: {
                        name: "Gill Bates",
                        avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
                    },
                    text: "Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.",
                }
            ],
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
                "Тестовый текст",
            likes: 15,
            reposts: 2,
            comments: [
                {
                    id: 1,
                    user: {
                        name: "Bill Gates",
                        avatar: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                    },
                    text: "Тестовый комментарий",
                },
                {
                    id: 2,
                    user: {
                        name: "Gill Bates",
                        avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
                    },
                    text: "Тестовый комментарий",
                },
            ]
        }];

    return {
        props: {
            posts
        }
    }
}

export default function Profile({ posts }) {
    const [newPost, setNewPost] = React.useState(false);

    const handleNewPostOpen = () => {
        setNewPost(true);
    }

    const handleNewPostClose = () => {
        setNewPost(false);
    }

    const { data: session, status } = useSession();
    if (status === "loading") {
        return null;
    }
    if (session) {
        return (
            <div className="container">
                <div className="profile__posts">
                    <h2>Последние посты:</h2>
                    {/* Temporary change until normal db connection */}
                    {/* {posts.map(post => (
                        <>
                            <Post post={post} height={"400px"} />
                            <br />
                        </>
                    ))} */}
                    {posts.map(post => {
                        post.user.name = session.user.name
                        post.user.avatar = session.user.image
                        return (
                            <React.Fragment key={post.id}>
                                <Post post={post} height={"400px"} />
                                <br />
                            </React.Fragment>)
                    })}
                </div>
                <Card className="profile__information">
                    <div className="profile__image">
                        <img src={session.user.image} alt="user avatar" />
                    </div>
                    {/* visible if user on his page */}
                    {/* <div className="profile__modify__button">
                        <Button variant="outlined">
                            Изменить профиль
                        </Button>
                    </div> */}
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
                        <b>Дата рождения:</b><br />10.01.2002
                    </div>
                    <div className="profile__email">
                        <b>Email:</b><br />
                        {session.user.email}
                    </div>
                    <div className="profile__followers">
                        <b>Подписчиков:</b><br />0
                    </div>
                    <div className="profile__following">
                        <b>Подписок:</b><br />0
                    </div>
                    {/* visible if user on his page */}
                    <div className="profile__new_post__button">
                        <Button variant="contained" fullWidth onClick={handleNewPostOpen}>
                            <b>Написать пост</b>
                        </Button>
                    </div>
                </Card>
                <Dialog open={newPost} onClose={handleNewPostClose} fullWidth={true} maxWidth="sm">
                    <DialogTitle>Что нового?</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="text"
                            label="Описание"
                            fullWidth
                            variant="outlined"
                            multiline
                            required
                        />
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <AddPhotoAlternateOutlinedIcon />
                            </IconButton>
                        </label>
                        <IconButton color="primary" aria-label="create poll" component="span">
                            <PollOutlinedIcon />
                        </IconButton>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleNewPostClose}>Отменить</Button>
                        <Button onClick={handleNewPostClose}>Отправить</Button>
                    </DialogActions>
                </Dialog>
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