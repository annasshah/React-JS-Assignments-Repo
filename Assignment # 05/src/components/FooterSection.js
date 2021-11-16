import { Grid, Typography, Button, Stack, Hidden, Divider } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Container } from 'react-bootstrap'
import OutlinedInput from '@mui/material/OutlinedInput';
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import SvgIcon from '@mui/material/SvgIcon';


export default function FooterSection() {
    return (
        <Box sx={{ backgroundColor: '#445268', py: 3, mt: 4 }}>
            <Container>
                <Grid container sx={{ my: 3 }}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Typography align='center' sx={{ color: 'white' }}>
                            Trade Alert - Delivering the latest product trends and industry news straight to your inbox.
                        </Typography>

                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

                        <Hidden mdDown={true}>
                            <Box sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Stack spacing={2} direction="row">
                                    <Box><OutlinedInput square fullWidth autoFocus={false} sx={{ color: 'white', border: '1px solid white', outline: 'none', backgroundColor: '#313d51', py: 0 }} placeholder="Please enter text" />
                                        <Typography sx={{ my: 1, fontSize: '12px', color: '#999999' }}>We’ll never share your email address with a third-party.</Typography>
                                    </Box>


                                    <Box><Button sx={{ color: 'white', py: 2, px: 3, border: '1px solid white' }} variant="outlined">Subscribe</Button>
                                    </Box>
                                </Stack>
                            </Box>
                        </Hidden>

                        <Hidden mdUp={true}>
                            <Box sx={{ my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Stack spacing={2} direction="column">
                                    <Box><OutlinedInput square fullWidth autoFocus={false} sx={{ color: 'white', border: '1px solid white', outline: 'none', backgroundColor: '#313d51', py: 0 }} placeholder="Please enter text" />
                                        <Box><Button fullWidth sx={{ my: 2, color: 'white', py: 1, px: 3, border: '1px solid white' }} variant="outlined">Subscribe</Button>
                                        </Box>
                                        <Typography sx={{ my: 1, fontSize: '12px', color: '#999999' }}>We’ll never share your email address with a third-party.</Typography>
                                    </Box>


                                </Stack>
                            </Box>
                        </Hidden>


                    </Grid>
                </Grid>

                <Grid container sx={{ my: 2 }}>

                    <Grid item xl={2.5} lg={2.5} md={6} sm={12} xs={12} sx={{ my: 2 }}>
                        <Box>
                            <Typography variant='h6' sx={{ color: 'white', fontSize: 18 }} >
                                Customer Services
                            </Typography>
                            <Stack spacing={1} direction="column" sx={{ my: 1, color: 'white', fontSize: 10, fontWeight: 'normal' }}>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Help Center
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Contact Us
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Help Center
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Report Abuse
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Submit a Dispute
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Policies &amp; Rules
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Get Paid for Your Feedback
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>


                    <Grid item xl={2} lg={2} md={6} sm={12} xs={12} sx={{ my: 2 }}>
                        <Box>
                            <Typography variant='h6' sx={{ color: 'white', fontSize: 18 }} >
                                About Us
                            </Typography>
                            <Stack spacing={1} direction="column" sx={{ my: 1, color: 'white', fontSize: 10, fontWeight: 'normal' }}>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    About Alibaba.com
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    About Alibaba Group
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Sitemap
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>


                    <Grid item xl={2.5} lg={2.5} md={6} sm={12} xs={12} sx={{ my: 2 }}>
                        <Box>
                            <Typography variant='h6' sx={{ color: 'white', fontSize: 18 }} >
                                Source on Alibaba.com
                            </Typography>
                            <Stack spacing={1} direction="column" sx={{ my: 1, color: 'white', fontSize: 10, fontWeight: 'normal' }}>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Resources
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    All Categories
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Request for Quotation
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Ready to Ship
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Buyer Partners
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>


                    <Grid item xl={2.5} lg={2.5} md={6} sm={12} xs={12} sx={{ my: 2 }}>
                        <Box>
                            <Typography variant='h6' sx={{ color: 'white', fontSize: 18 }} >
                                Sell on Alibaba.com
                            </Typography>
                            <Stack spacing={1} direction="column" sx={{ my: 1, color: 'white', fontSize: 10, fontWeight: 'normal' }}>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Supplier Memberships
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Learning Center
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Partner Program
                                </Typography>

                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item xl={2.5} lg={2.5} md={6} sm={12} xs={12} sx={{ my: 2 }}>
                        <Box>
                            <Typography variant='h6' sx={{ color: 'white', fontSize: 18 }} >
                                Trade Services
                            </Typography>
                            <Stack spacing={1} direction="column" sx={{ my: 1, color: 'white', fontSize: 10, fontWeight: 'normal' }}>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Trade Assurance
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Business Identity
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Logistics Service
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Production Monitoring  &amp; <br /> Inspection Services
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 12 }} >
                                    Letter of Credit
                                </Typography>

                            </Stack>
                        </Box>
                    </Grid>

                </Grid>


                <Divider />

                <Grid container sx={{ my: 2 }}>
                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>

                        <Stack spacing={1} direction="row" sx={{my:2, display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ color: 'white' }}>Download: </Typography>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Available_on_the_App_Store_%28gray%29.png/800px-Available_on_the_App_Store_%28gray%29.png' width="100px" />
                            <img src='https://www.seekpng.com/png/full/944-9442300_download-app-from-app-store-android-store-logo.png' width="100px" />
                        </Stack>

                    </Grid>

                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12} sx={{my:2, display: 'flex', justifyContent: 'center' }}>
                        <Stack spacing={1} direction="row" sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ color: 'white' }}>Alibaba Supplier App :</Typography>
                            <img src='https://image.winudf.com/v2/image1/Y29tLmFsaWJhYmEuaWNidS5hcHAuc2VsbGVyX2ljb25fMTU2MzQ2NzYyNl8wNjE/icon.png?w=&fakeurl=1' width="40px" />
                        </Stack> </Grid>


                    <Grid item xl={4} lg={4} md={6} sm={12} xs={12} sx={{ my:2,display: 'flex', justifyContent: 'center' }}>
                        <Stack spacing={1} direction="row" sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ color: 'white' }}>Follow Us: </Typography>
                            <Stack spacing={2} direction="row" >
                                <SvgIcon sx={{ color: 'white' }}><AiFillFacebook /></SvgIcon>
                            </Stack>
                            <Stack spacing={2} direction="row" >
                                <SvgIcon sx={{ color: 'white' }}><FaTwitterSquare /></SvgIcon>
                            </Stack>
                            <Stack spacing={2} direction="row" >
                                <SvgIcon sx={{ color: 'white' }}><FaYoutubeSquare /></SvgIcon>
                            </Stack>
                            <Stack spacing={2} direction="row" >
                                <SvgIcon sx={{ color: 'white' }}><FaLinkedin /></SvgIcon>
                            </Stack>
                        </Stack>

                    </Grid>

                </Grid>






                <Grid container sx={{ my: 2 }}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                        <Stack spacing={1} direction="row" >
                            <SvgIcon sx={{ color: 'white', fontSize: '20px' }}><GoGlobe /></SvgIcon> <Typography sx={{ color: 'white', fontSize: '12px' }}> Alibaba.com Site: International - Español - Português - Deutsch - Français - Italiano - हिंदी - Pусский - 한국어 - 日本語 - اللغة العربية - ภาษาไทย - Türk - Nederlands - tiếng Việt - Indonesian - עברית</Typography>
                        </Stack>

                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography align='center' sx={{ color: 'white', fontSize: '12px' }}> Alibaba Group | Taobao Marketplace | Tmall.com | Juhuasuan | AliExpress | Alibaba.com | 1688.com | Alimama | Fliggy | Tmall Taobao World</Typography>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography align='center' sx={{ color: 'white', fontSize: '12px' }}>Alibaba Cloud | AliOS | AliTelecom | Autonavi | UCWeb | Umeng | Xiami | DingTalk | Alipay | Lazada | Alibaba Security</Typography>
                    </Grid>


                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                        <Typography align='center' sx={{ color: 'white', fontSize: '12px' }}>Browse Alphabetically: Onetouch | Showroom | Country Search | Suppliers | Affiliate</Typography>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                        <Typography align='center' sx={{ color: 'white', fontSize: '12px' }}>Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use - User Information Legal Enquiry Guide</Typography>
                    </Grid>

                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                        <Stack spacing={1} direction="row" >
                            <img src='https://img.alicdn.com/tfs/TB1VtZtebH1gK0jSZFwXXc7aXXa-65-70.gif' width='20px' />
                            <Typography align='center' sx={{ color: 'white', fontSize: '12px' }}>© 1999-2021 Alibaba.com. All rights reserved.</Typography>
                        </Stack>
                        <Stack spacing={1} direction="row" >
                            <img src='https://img.alicdn.com/tfs/TB1QhYprKT2gK0jSZFvXXXnFXXa-20-20.png' width='20px' />
                            <Typography align='center' sx={{ color: '#939393', fontSize: '12px' }}>浙公网安备 33010002000092号 浙B2-20120091-4</Typography>
                        </Stack>

                    </Grid>
                </Grid>
            </Container>


        </Box >
    )
}
