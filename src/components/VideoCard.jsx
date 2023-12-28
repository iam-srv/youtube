import React from 'react'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    // console.log(snippet?.thumbnails?.high?.url);

    return (
        <Card sx={{
            width: { xs: '100%', md: '320px' },
            boxShadow: 'none', borderRadius: 2
        }}  >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }} >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color='#FFF'
                        sx={{ background: '#1e1e1e' }}
                    >
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color='gray'
                        sx={{ background: '#1e1e1e' }}
                    >
                        {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: "5px" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard