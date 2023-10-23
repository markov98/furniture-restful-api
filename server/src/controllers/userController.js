const router = require("express").Router();
const userService = require("../services/userService");
const { isAuth } = require("../middlewares/authMiddleware");

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.register({ email, password });

    res.json(result);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.login({ email, password });

    res.json(result);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.get("/logout", isAuth, (req, res) => {
  res.end();
});

module.exports = router;
