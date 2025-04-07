import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../SubjectCard/SubjectCard.css';

export default function ImgMediaCard() {
    return (
        <>
            <div className="subject-area">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Introductory Mathematics
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet, dolor deserunt similique quae veniam
                            error!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Introductory Progamming
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet, dolor deserunt similique quae veniam
                            error!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Web Development
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet, dolor deserunt similique quae veniam
                            error!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
            <div className="subject-area">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            AI & Machine Learning
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet, dolor deserunt similique quae veniam
                            error!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Network Engineering
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet, dolor deserunt similique quae veniam
                            error!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Web Design
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary' }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet, dolor deserunt similique quae veniam
                            error!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    );
}
