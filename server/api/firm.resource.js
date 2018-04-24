const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const { Firm, validate } = require('../app/firms/firm.model');
const firmService = require('../app/firms/firm.service');

/**
 * 
 * Create new firm
 * POST api/firms
 * 
 */
router.post('/', async (req, res) => {
    try {
        let firm = await firmService.add(req.body);
        return res.send(firm);
    }
    catch (e) {
        return res.status(400).send(e);
    }
});

/**
 * 
 * Find firm by id
 * GET api/firms/:id
 * 
 */
router.get('/:id', async (req, res) => {
    const firm = await Firm.findById(req.params.id);
    if (!firm) return res.status(404).send('Firm with the given id was not found');
    res.send(firm);
});

/**
 * 
 * Update firm by id
 * PUT api/firms/:id
 * 
 */
router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const firm = await Firm.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
    if (!firm) return res.status(404).send('Firm with the given id was not found');

    res.send(firm);
});

/**
 * 
 * Remove firm by id
 * DELETE api/firms/:id
 * 
 */
router.delete('/:id', async (req, res) => {
    const firm = await Firm.findByIdAndRemove(req.params.id);
    if (!firm) return res.status(404).send('Firm with the given id was not found');

    res.send(firm);
});

/**
 * 
 * Find all firms
 * GET api/firms
 * 
 */
router.get('/', async (req, res) => {
    const firms = await firmService.getAll();
    res.send(firms);
});

/**
 * 
 * Exports router module
 * 
 */
module.exports = router;