require("dotenv").config();
const fileUpload = require("express-fileupload");
const express = require("express");
const passport = require('passport')
const adminRouter = require("./routes/adminRoutes");
const plansRouter = require("./routes/planRouter");
const mailChimpRouter = require("./routes/mailChimpRouter");
const productRouter = require("./routes/productRouter");
const contactUsRouter = require("./routes/contactUsRouter");
const teamRouter = require("./routes/teamRouter");
const partnersRouter = require("./routes/partnerRouter");
const memberRouter = require("./routes/memberRouter");
const campaginRouter = require("./routes/campaginRouter");
const cardRouter = require('./routes/cardRouter');
const ejsEditor = require('./routes/ejsPlanRouter')



const cors = require("cors");

const path = require("path");
const PORT = process.env.PORT || 5000;

const app = express();

const db = require("./db");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(methodOverride("_method"));
app.use(cors());
app.use(fileUpload());
app.use(passport.initialize());

require('./config/passport')(passport);

app.post("/upload", (req, res) => {
	if (req.files === null) {
		return res.status(400).json({ msg: "No file uploaded" });
	}
	const file = req.files.file;
	file.mv(`${__dirname}/../client/public/uploads/${file.name}`, (err) => {
		if (err) {
			console.error(err);
			return res.status(500).send(err);
		}
		res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
	});
});

app.use("/mailChimp", mailChimpRouter);
app.use("/plans", plansRouter);
app.use("/admin", adminRouter);
app.use("/product", productRouter);
app.use("/contactUs", contactUsRouter);
app.use("/team", teamRouter);
app.use("/partners", partnersRouter);
app.use("/campagin", campaginRouter);
app.use("/member", memberRouter);
app.use('/card',cardRouter)
app.use('/planedit',ejsEditor)



if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../client/build")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../client/build", "index.html"));
	});
} else {
	app.get("/", (req, res) => {
		res.send("Api running");
	});
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


module.exports = app;