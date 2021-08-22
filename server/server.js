require('dotenv').config();
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 5000;
const articleModel = require('./models/article');

const app = express();

const db = require('./db/db');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(express.json()); // JSON יכולת לקרוא ולהציג מידע מ
app.use(express.urlencoded({ extended: false })); // params יכולת לשלוף מידע מ
app.use(methodOverride('_method'));
app.use(cors());

const adminRouter = require('./routes/adminRoutes');
const articlesRouter = require('./routes/articleRouter');
const newsLetterRouter = require('./routes/newsLetterRouter');
const productRouter = require('./routes/productRouter');

app.use('/form', newsLetterRouter);
app.use('/login', articlesRouter);
app.use('/admin', adminRouter);
app.use('/product', productRouter);

app.get('/', async (req, res) => {
  const articles = await articleModel.find().sort({ createdAt: 'desc' });
  res.render('articles/index', { articles });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use('/articles', articlesRouter);
