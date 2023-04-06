const express = require("express");

const router = express.Router();
const db = require("../database/parts");

router.get("/", (req, res) => {
  // res.redirect("/api/parts");
});


  router.get('/api/parts', async (req, res) => {
    try {
      const parts = await db.getAllParts();
      res.json(parts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
module.exports = router;
