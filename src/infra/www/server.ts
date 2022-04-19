import app from '@app';

const port = process.env.API_PORT;

app.listen(port, () => console.log('🚀', `Server started on port ${port}`));
