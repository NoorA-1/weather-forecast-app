import { Container, Typography, Card, CardContent, Stack } from "@mui/material";

function App() {
  return (
    <main className="app">
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Card>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                Lithuania Weather Forecast
              </Typography>

              <Typography variant="body1" color="text.secondary">
                Frontend setup is ready. City search and weather forecast will
                be added next.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}

export default App;
