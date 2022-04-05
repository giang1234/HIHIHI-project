import { forwardRef, FC} from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import BreadcrumbContainer from 'src/components/Breadcrumb';
import { t } from 'i18next';
import { formatNumber } from 'src/utils/standardizedData';
import { Add } from '@mui/icons-material';

interface iRecipeProps {
  ref: any;
  data: any[];
  intoPrice: any;
  totalPrice: any;
  paymentActive: number;
  setPaymentActive: any;
};
const MainContent: FC<iRecipeProps> = forwardRef(({
  data,
  intoPrice,
  totalPrice,
  paymentActive,
  setPaymentActive
}, ref): JSX.Element => {
  const flexCenter = {display: 'flex', alignItems: 'center'};
  const renderPayment = (active: number): JSX.Element => {
    switch(Number(active)) {
      case 0: 
        return <>
          <Box sx={{borderRadius: '10px', p: 2, backgroundColor: '#fff', width: '320px', border: '1px solid #ddd'}}>
            <Box sx={{...flexCenter, justifyContent: 'space-between'}}>
              <img src="/static/images/logo/logo.png" width='80px' alt=""/>
              <Button>+ Nạp thêm</Button>
            </Box>
            <Box sx={{...flexCenter, mt: 3, color: '#0E50A4', justifyContent: 'space-between'}}>
              <span>Số dư ví HIHIHI: </span>
              <b>{`${formatNumber(150000)} Xu`}</b>
            </Box>
          </Box>
        </>
      case 1: 
        return <>
          <Box sx={{borderRadius: '10px', p: 2, backgroundColor: '#fff', textAlign: 'center', width: '380px', border: '1px solid #ddd'}}>
            <img src="/static/images/component/paypal.png" width="80%" alt=""/>
          </Box>
        </>
      case 2: 
        return <>
          <h2 style={{marginTop: 0, color: "#0E50A4"}}>
            Danh sách thẻ ngân hàng
          </h2>
          {
            ['visa', 'masterCard'].map((v: any, index: number): JSX.Element => {
              return <Box key={'card_' + index } sx={{borderRadius: '10px', p: 2, mt: 2, backgroundColor: '#fff', width: '380px'}}>
                <Box sx={{...flexCenter, color: '#0E50A4', justifyContent: 'space-between'}}>
                  <span>Tên ngân hàng: </span>
                  <img src={`/static/images/component/${v}.png`} alt=""/>
                </Box>
                <Box sx={{...flexCenter, mt: 2, color: '#0E50A4', justifyContent: 'space-between'}}>
                  <span>Số tài khoản: </span>
                  <b>******6321</b>
                </Box>
                <Box sx={{textAlign: 'center', mt: 2}}>
                  <Button>Sử dụng</Button>
                </Box>
              </Box>
            })
          }
          <Box sx={{width: '380px', mt: 2}}>
            <Button variant="outlined" sx={{ width: '100%', borderRadius: '15px', py: 2 }} startIcon={<Add />}>
              Thêm thẻ thanh toán
            </Button>
          </Box>
        </>
    }
  };
  return (
    <>
      <Container maxWidth="xl">
        <Box>
          <Box className="breadcrumb-container">
            <BreadcrumbContainer data={{name: 'Thanh toán'}} isReload={false}/>
          </Box>
          <Box sx={{mt: 3, 
            width: '100%',
            background: 'rgba(14, 80, 164, 0.08)',
            boxShadow: '2px 2px 20px rgba(14, 80, 164, 0.2)',
            borderRadius: '10px'}}>
            <Box sx={{...flexCenter, justifyContent: 'space-between', px: 3, py: 2 }}>
              <Box>
                <Box sx={flexCenter}>
                  <img src="/static/images/icon/position.png" alt="" style={{marginRight: '10px'}}/> 
                  <h2 style={{
                    margin: 0,
                    color: '#0E50A4'
                  }}>Địa chỉ nhận hàng</h2>
                </Box>
                <Box sx={{mt: 2, color: '#0E50A4'}}>
                  <b style={{marginRight: '15px'}}>User1234 - 0123456789</b>
                  Số 41, đường số 12, phường 10 , quận Gò Vấp, TP HCM  (mặc định)
                </Box>
              </Box>
              <Box>
                <Button onClick={() => {}}>{t('Thay đổi')}</Button>
              </Box>
            </Box>
          </Box>

          <Box sx={{mt: 5, 
            width: '100%',
            background: 'rgba(14, 80, 164, 0.08)',
            boxShadow: '2px 2px 20px rgba(14, 80, 164, 0.2)',
            borderRadius: '10px'}}>
            <Box sx={{ px: 3 }}>
              <Box sx={{borderBottom: '1px solid #0E50A4'}}>
                <Grid container sx={{...flexCenter, fontSize: '16px', color: '#555' }}>
                  <Grid item md={6}>
                    <h2 style={{color: '#0E50A4'}}>Sản phẩm</h2>
                  </Grid>
                  <Grid item md={2}>
                    Đơn giá
                  </Grid>
                  <Grid item md={2}>
                    Số lượng
                  </Grid>
                  <Grid item md={2}>
                    Thành tiền
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Box sx={{...flexCenter, fontSize: '15px', color: '#0E50A4'}}>
                  <img src="/static/images/icon/store.png" alt="" style={{marginRight: '10px'}}/>
                  <h3>Nongtrai Official Store</h3>
                </Box>

                {
                  data && <>
                    { data.map((v: any, index: number): JSX.Element => {
                      return <Box key={'product_' + index} sx={{pb: 2}}>
                        <Grid container>
                          <Grid item md={6} sx={flexCenter}>
                            <Box sx={{display: 'flex'}}>
                              <img src={v.info?.image} style={{marginRight: '10px'}} alt="#"/>
                              <Box>
                                <h3 style={{color: '#0E50A4', marginBottom: '5px'}}>{v.info.name}</h3>
                                <Typography component={'span'}>{v.info?.description}</Typography>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item md={2}>{`${formatNumber(v.info?.price)} VNĐ`}</Grid>
                          <Grid item md={2}>{v.amount}</Grid>
                          <Grid item md={2}>{`${formatNumber(intoPrice(v.info, v.amount))} VNĐ`}</Grid>
                        </Grid>
                      </Box>
                    })}
                    <Box key={data.length + 1} sx={{py: 2, borderTop: '1px solid #0E50A4'}}>
                      <Grid container sx={flexCenter}>
                        <Grid item md={6} sx={flexCenter}>
                          <Box sx={{ ...flexCenter, marginY: 1, width: '100%' }}>
                            <Typography sx={{ width: '10%', fontWeight: 'bold' }}>Ghi chú: </Typography>
                            <input type='text' placeholder='Để lại ghi chú cho người bán...' style={{ paddingLeft: '10px', width: '60%', height: '50px', borderRadius: '7px', border: 'none', backgroundColor: '#fff', outline: 'none' }}/>
                          </Box>
                        </Grid>
                        <Grid item md={4}><h2>{`Tổng tiền (${data.length} sản phẩm)`}</h2></Grid>
                        <Grid item md={2}>{`${formatNumber(totalPrice(data))} VNĐ`}</Grid>
                      </Grid>
                    </Box>
                  </>
                }
              </Box>
            </Box>
          </Box>

          <Box sx={{mt: 5}}>
            <Grid container sx={{...flexCenter, alignItems: 'stretch'}}>
              {
                ['voucher', 'impart'].map((v: any, index: number) => (
                  <Grid item md={6} sx={!index ? {pr: 2} : {pl: 2}} key={'payment_content_3_' + index}>
                    <Box sx={{
                      width: '100%',
                      height: '100%',
                      background: 'rgba(14, 80, 164, 0.08)',
                      boxShadow: '2px 2px 20px rgba(14, 80, 164, 0.2)',
                      borderRadius: '10px'}}>
                      <Box sx={{...flexCenter, p: 3, height: '100%', justifyContent: 'space-between'}}>
                        <Box sx={{...flexCenter, color: '#0E50A4'}}>
                          <img src={`/static/images/icon/${v}.png`} alt="" style={{marginRight: '10px'}}/>
                          <h2>{t(`payment.${v}`)}</h2>
                        </Box>
                        <Box>
                          <Button onClick={() => {}}>{t('Chọn')}</Button>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))
              }
            </Grid>
          </Box>

          <Box mt={5}>
            <Box sx={{
              width: '100%',
              height: '100%',
              background: 'rgba(14, 80, 164, 0.08)',
              boxShadow: '2px 2px 20px rgba(14, 80, 164, 0.2)',
              borderRadius: '10px'}}>
              <Box sx={{height: '100%'}}>
                <Box sx={{...flexCenter, color: '#0E50A4', p: 3}}>
                  <Checkbox />
                  <h2>{t(`payment.invoice_infomation`)}</h2>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box mt={5}>
            <Box sx={{
              width: '100%',
              height: '100%',
              background: 'rgba(14, 80, 164, 0.08)',
              borderRadius: '10px'}}>
              <Box p={3}>
                <Box>
                  <h2 style={{color: '#0E50A4', marginTop: 0}}>Phương thức thanh toán</h2>
                </Box>
                <RadioGroup
                  aria-label="gender"
                  defaultValue="female"
                  name="radio-buttons-group"
                  value={paymentActive}
                  onChange={(event) => setPaymentActive(event.target.value)}
                >
                  <Box className="tabList" sx={{...flexCenter, pb: 3, borderBottom: '1px solid #0E50A4'}}>
                    {
                      ['Ví HIHIHI', 'Paypal', 'Chuyển khoản ngân hàng'].map((v: any, index: number): JSX.Element => {
                        return <Box key={'tab_' + index} sx={{borderRadius: '10px', mr: 3, px: 2, py: 1, backgroundColor: '#fff', border: '1px solid #ddd'}}>
                          <FormControlLabel value={index} control={<Radio />} label={v} sx={{color: '#0E50A4'}} />
                        </Box>
                      })
                    }
                  </Box>
                </RadioGroup>
                <Box pt={3}>
                  <Grid container>
                    <Grid md={7} item>
                      {renderPayment(paymentActive)}
                    </Grid>
                    <Grid md={5} item>
                      <Box sx={{width: '100%'}}>
                        <Box sx={{...flexCenter, justifyContent: 'space-between', width: '100%'}}>
                          <Box>Tổng tiền (Tạm tính): </Box>
                          <Box>{`${formatNumber(totalPrice(data))} VNĐ`}</Box>
                        </Box>
                        <Box sx={{...flexCenter, justifyContent: 'space-between', width: '100%', mt: 2}}>
                          <Box>Phí vận chuyển: </Box>
                          <Box>{`${formatNumber(20000)} VNĐ`}</Box>
                        </Box>
                        <Box sx={{...flexCenter, justifyContent: 'space-between', width: '100%', mt: 2}}>
                          <Box>Giảm giá: </Box>
                          <Box>{`0 VNĐ`}</Box>
                        </Box>
                        <Box sx={{...flexCenter, justifyContent: 'space-between', width: '100%', mt: 2}}>
                          <Box sx={{color: '#0E50A4'}}>Triết khấu (7%): </Box>
                          <Box>{`${formatNumber(Math.floor(totalPrice(data) * (7 / 100)))} VNĐ`}</Box>
                        </Box>
                      </Box>
                      <Box>
                        <Box sx={{...flexCenter, justifyContent: 'space-between', width: '100%', mt: 2}}>
                          <Box>Tổng tiền hàng: </Box>
                          <h2 style={{color: '#0E50A4'}}>{`${formatNumber(totalPrice(data) - Math.floor(totalPrice(data) * (7 / 100)))} VNĐ`}</h2>
                        </Box>
                      </Box>
                      <Box sx={{width: '100%', mt: 2}}>
                        <Button variant='contained' size='large' sx={{width: '100%'}}>Đặt hàng</Button>
                      </Box>
                      <Box mt={2} sx={{textAlign: 'center'}}><Box>Nhấn “ Đặt hàng” đồng nghĩa với việc bạn đồng ý</Box><Button>Điều khoản của HIHIHI</Button></Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
});

export default MainContent;