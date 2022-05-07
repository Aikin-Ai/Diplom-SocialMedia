/* eslint-disable @next/next/no-img-element */
import Plyr from "plyr-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import { Card, CardContent } from '@mui/material';

export default function Post({ post }) {
    return (

        <Card className="post__card">
            <CardContent>
                <div className="post">
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
                        <img
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
                        <p className="repost__count">{post.reposts} репостов</p>
                        <p className="likes__count">{post.likes} отметок «Нравится»</p>
                        <IconButton className="like_button" onClick={() => { }}>
                            <ThumbUpOffAltIcon />
                        </IconButton>
                        <IconButton className="repost__button" onClick={() => { }}>
                            <ShareIcon />
                        </IconButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}