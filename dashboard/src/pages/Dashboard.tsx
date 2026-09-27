import {
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

function Dashboard() {
  return (
    <Stack spacing={3}>
      <div>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600 }}
        >
          Dashboard
        </Typography>

        <Typography color="text.secondary">
          Qiita Mock Server Overview
        </Typography>
      </div>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                Server Status
              </Typography>

              <Typography
                variant="h5"
                color="success.main"
                sx={{ fontWeight: 600 }}
              >
                Running
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                Mock APIs
              </Typography>

              <Typography
                variant="h5"
                sx={{ fontWeight: 600 }}
              >
                1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
          >
            Mock API
          </Typography>

          <Typography>
            GET /api/items
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default Dashboard;