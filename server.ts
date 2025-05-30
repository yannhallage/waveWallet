import app from './app';

const PORT = process.env.PORT || 2001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
