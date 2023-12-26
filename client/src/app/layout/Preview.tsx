import { Button, CssBaseline, Typography } from '@mui/material'
import videoBg from '../../assets/videoSBG.mp4'

export default function Preview () {
    return (
        <>
        <CssBaseline />
        <div className="videodiv"><video src={videoBg} autoPlay loop muted />
            </div>

            <div className="overlay"><div className="content">
    <Button href="/catalog" className="pButton" color='inherit' sx={{":hover": {backgroundColor: 'inherit'}, ":focus": {}}}>
        <Typography variant='h3'>До Каталогу</Typography>                
    </Button></div></div>

            
        </> 
    )
}
