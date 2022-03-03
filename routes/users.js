const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("USers new form");
});

// router.get("/:id", (req, res) => {
//   req.params.id;
//   res.send(`Get user with ID ${req.params.id}`);
// });
// router.put("/:id", (req, res) => {
//   req.params.id;
//   res.send(`Get user with ID ${req.params.id}`);
// });
// router.delete("/:id", (req, res) => {
//   req.params.id;
//   res.send(`Get user with ID ${req.params.id}`);
// });

router
  .route("/:id")
  .get((req, res) => {
    req.params.id;
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    req.params.id;
    res.send(`Get user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    req.params.id;
    res.send(`Get user with ID ${req.params.id}`);
  });

router.param("id", (req, res, next, id) => {
  //   console.log(id);
  next();
});

module.exports = router;
