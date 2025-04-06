import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import AppLayout from '@/components/layout';
import { appTheme } from '@/config/theme';
import { store } from '@/store';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(appTheme);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <AppLayout />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
