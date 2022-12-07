const express = require("express");
const questionModule = require("../models/questionModule");

const router = express.Router();

router.get("/get", questionModule.getQuestions);
router.get("/get/:id", questionModule.getQuestionById);
router.post("/create", questionModule.createQuestion);

module.exports = router;