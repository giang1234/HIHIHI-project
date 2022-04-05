import { Box, CircularProgress } from '@mui/material';
import { usePromiseTracker } from "react-promise-tracker";
function Loading() {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <>
      {
        promiseInProgress === true ? 
        <Box sx={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          background: 'rgba(252, 252, 252,.5)',
          zIndex: 1000000
        }}>
          <Box sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <CircularProgress />
          </Box>
        </Box> : undefined
      }
    </>
  );
}

export default Loading;
