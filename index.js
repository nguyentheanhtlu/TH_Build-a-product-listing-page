const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

const products = [
    {
        title: 'Phạm Hữu Thoại Khánh',
        src: './images/img1.jpg'
    },
    {
        title: 'Đoàn Yến CuTE',
        src: './images/img2.jpg'
    },
    {
        title: 'Trung đẹp trai',
        src: './images/img3.jpg'
    },
    {
        title: 'Lâm Lãng Tử boizzz',
        src: './images/img4.jpg'
    },

]
app.get('/', ((req, res) => {
    res.render('home', {data: products})
}))


app.listen(PORT, () => {
    console.log('listening on port' + PORT);
});