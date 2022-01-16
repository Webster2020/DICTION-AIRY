const express = require('express');
const router = express.Router();

const Word = require('../models/word.model');

router.get('/words', async (req, res) => {
  try {
    const result = await Word
      .find()
      .select('user word translation sentence type tagA tagB language level like')
      .sort({word: -1});
    if(!result) res.status(404).json({ word: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/word', async (req, res) => {
  try {
    const { 
      user,
      word,
      translation,
      sentence,
      type,
      tagA,
      tagB,
      language,
      level,
      like,
    } = req.body;
    const newWord = new Word({
      user: user, 
      word: word,
      translation: translation,
      sentence: sentence,
      type: type,
      tagA: tagA,
      tagB: tagB,
      language: language,
      level: level,
      like: like,
    });
    await newWord.save();
    res.json({ message: 'OK' });
  } 
  catch(err) {
    console.log('TU ERROR');
    res.status(500).json({ message: err });
  }
});

router.put('/word/:id', async (req, res) => {
  const { 
    level,
    like,
  } = req.body;
  try {
    const word = await Word.findById(req.params.id);
    if(word) {
      await Word.updateOne(
        {
          _id: req.params.id 
        }, 
        { 
          $set: { 
            level: level,
            like: like,
          }
        }
      );
      res.json({ message: 'OK', editedDocument: word });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

router.delete('/word/:id', async (req, res) => {
  try {
    const word = await Word.findById(req.params.id);
    if(word) {
      await Word.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK', deletedDocument: word });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
