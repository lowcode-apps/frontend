import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Slider from '@mui/material/Slider';
import PopoverMenu from './PopoverMenu';
import ProTip from './ProTip';
import { QueryClient, QueryClientProvider } from "react-query";

import Router from "./pages";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const client = new QueryClient();

export default function App() {
  return (
    // <Container maxWidth="lg">
    <QueryClientProvider client={client}>

      <Router />
</QueryClientProvider>
    // </Container>
  );
}
