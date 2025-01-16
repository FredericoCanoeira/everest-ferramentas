const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

// Criar um novo relatório
router.post('/', async (req, res) => {
  try {
    const { userId, content } = req.body;

    const newReport = new Report({
      userId,
      content,
    });

    const savedReport = await newReport.save();
    res.status(201).json(savedReport);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar o relatório' });
  }
});

// Obter relatório por ID do usuário
router.get('/:userId', async (req, res) => {
  try {
    const reports = await Report.find({ userId: req.params.userId });
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar o relatório' });
  }
});

// Atualizar um relatório
router.put('/:reportId', async (req, res) => {
  try {
    const { content } = req.body;
    const updatedReport = await Report.findByIdAndUpdate(
      req.params.reportId,
      { content, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedReport) {
      return res.status(404).json({ error: 'Relatório não encontrado' });
    }

    res.status(200).json(updatedReport);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar o relatório' });
  }
});

// Gerar e baixar relatório em PDF
const PDFDocument = require('pdfkit');

router.get('/download/:reportId', async (req, res) => {
  try {
    const report = await Report.findById(req.params.reportId);

    if (!report) {
      return res.status(404).json({ error: 'Relatório não encontrado' });
    }

    const doc = new PDFDocument();
    res.setHeader('Content-Disposition', `attachment; filename=report-${report._id}.pdf`);
    res.setHeader('Content-Type', 'application/pdf');

    doc.text(`Relatório do Usuário: ${report.userId}`);
    doc.text(`Conteúdo: ${report.content}`);
    doc.text(`Criado em: ${report.createdAt}`);
    doc.text(`Atualizado em: ${report.updatedAt}`);

    doc.pipe(res);
    doc.end();
  } catch (err) {
    res.status(500).json({ error: 'Erro ao gerar o PDF do relatório' });
  }
});

module.exports = router;
