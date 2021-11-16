import { Grid, Paper, Typography, Box} from '@mui/material'

export default function ProductCard({ imgSrc, ProductTitle, priceRange, minOrders }) {


    return (
        <Grid item xl={2} lg={2} md={3} sm={4} xs={12}  >
            <Paper square={true} sx={{ px: 2, py: 1}} elevation={1} children={
                <Box sx={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                    <Box sx={{ width: '150px', height: '150px', overflow: 'hidden' }}>
                        <img src={imgSrc} alt="" width="100%" />
                    </Box>
                    <Typography  sx={{ fontSize: '13px', my: 1, height: '40px', overflow: 'hidden' }}>{ProductTitle}</Typography>
                    <Typography  sx={{ fontWeight: 'bold', fontSize: '12px', my: 1 }}>{priceRange}</Typography>
                    <Typography  sx={{ color: '#666666', fontSize: '13px', my: 1 }}>{minOrders}</Typography>
                </Box>

            } />

        </Grid>
    )
}
