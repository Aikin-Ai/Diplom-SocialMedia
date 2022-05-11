/* eslint-disable @next/next/no-img-element */
import Plyr from "plyr-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import { Avatar, Card, CardContent } from '@mui/material';
import { useState } from "react";

//mark page as server side loaded
export async function getServerSideProps(context) {
    return {
        props: {},
    }
}

export default function Post({ post, height = "calc(100vh - 128px)" }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isReposted, setIsReposted] = useState(false);
    const [likes, setLikes] = useState(post.likes);
    const [reposts, setReposts] = useState(post.reposts);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
    }
    const handleRepost = () => {
        setIsReposted(!isReposted);
        setReposts(isReposted ? reposts - 1 : reposts + 1);
    }

    return (
        <Card className="post__card">
            <CardContent>
                <div
                    className="post"
                    style={{
                        height: height,
                    }}>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {post.imageURLs.map(imageURL => (
                            <SwiperSlide key={imageURL.original}><img src={imageURL.original} alt='image'></img></SwiperSlide>
                        ))};
                    </Swiper>
                    <div className="post__content">
                        <Avatar
                            src={post.user.avatar}
                            alt="avatar"
                            width={48}
                            height={48}
                            className="user__avatar"
                        />
                        <p className="user__name">{post.user.name}</p>
                        <p className="post__description">{post.description}</p>
                    </div>
                    <div className="post__controls">
                        <p className="repost__count">{reposts} репостов</p>
                        <p className="likes__count">{likes} отметок «Нравится»</p>
                        <IconButton className="like_button" onClick={() => { handleLike() }}>
                            {isLiked ? <ThumbUpAltIcon color="primary" /> : <ThumbUpOffAltIcon />}
                        </IconButton>
                        <IconButton className="repost__button" onClick={() => { handleRepost() }}>
                            {isReposted ? <ShareIcon color="primary" /> : <ShareIcon />}
                        </IconButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}